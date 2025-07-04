import { updateUserBooking } from '@/app/_actions/bookings';
import { createPayment } from '@/app/_actions/createPayment';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const sig = req.headers.get('stripe-signature');
    let event;

    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      const userEmail = session.customer_email;
      const bookingId = session.metadata.bookingId;
      const amountInDollars = session.amount_total / 100;

      const payment = {
        amount: amountInDollars,
        currency: session?.currency,
        bookingId: bookingId,
        guestId: session?.metadata.guestId,
        cabinId: session?.metadata.cabinId,
        guestEmail: userEmail,
        paymentId: session?.payment_intent,
      };

      const createdPayment = await createPayment(payment);

      const updateData = {
        isPaid: true,
        paymentId: createdPayment.id,
        status: 'confirmed',
      };

      await updateUserBooking(bookingId, updateData, userEmail);
      return NextResponse.json({ received: true });
    }

    return NextResponse.json({ message: 'Event received' });
  } catch (error) {
    console.error('❌ Webhook Signature Verification Failed:', error.message);
    return NextResponse.json(
      { error: 'Webhook error: ' + error.message },
      { status: 400 }
    );
  }
}

import { getUserBooking } from '@/app/_actions/bookings';
import { getSession } from '@/app/_hooks/useSession';
import hasFiveMinutesPassed from '@/app/_libs/hasFiveMinutesPassed';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { bookingId } = await req.json();
    const { user } = await getSession();
    const emailId = user?.email;
    const booking = await getUserBooking(bookingId, emailId);

    if (!booking) {
      return new NextResponse('No booking found', { status: 404 });
    }

    const redirectToPayment = hasFiveMinutesPassed(booking.created_at);

    if (!redirectToPayment) {
      return new NextResponse('Allowed time for payment has passed.', {
        status: 401,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.PROJECT_URL}/paymentSuccess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.PROJECT_URL}/paymentFailed`,
      customer_email: booking.guestEmail,
      metadata: {
        bookingId: booking.id,
        cabinId: booking.cabinId,
        userEmail: booking.guestEmail,
        guestId: booking.guestId,
      },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Cabin Booking - 00${booking.cabinId}`,
            },
            unit_amount: booking.totalPrice * 100,
          },
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log('ERROR_IN_PAYMENT_SESSION', error);
    return NextResponse.json('Error in creating payment session', {
      status: 500,
    });
  }
}

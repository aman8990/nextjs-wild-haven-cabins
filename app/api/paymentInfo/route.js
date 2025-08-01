import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const session_id = searchParams.get('session_id');

    if (!session_id) {
      return new NextResponse('Session ID is required', {
        status: 400,
      });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);
    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 500,
    });
  }
}

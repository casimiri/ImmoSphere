import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';
import { createServerClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { listingId, priceId, duration } = await request.json();
    
    const supabase = createServerClient();
    const { data: listing } = await supabase
      .from('listings')
      .select('*')
      .eq('id', listingId)
      .single();

    if (!listing) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'xof',
            product_data: {
              name: `Annonce Premium - ${listing.title}`,
              description: `Mise en avant de votre annonce pendant ${duration} jours`,
            },
            unit_amount: duration === 30 ? 15000 : 8000, // 15,000 XOF for 30 days, 8,000 XOF for 7 days
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/annonces/${listingId}?premium=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/annonces/${listingId}?premium=cancelled`,
      metadata: {
        listingId,
        duration: duration.toString(),
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
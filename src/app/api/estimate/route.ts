import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { contact, campaign, estimate } = body;

    if (!contact?.email || !contact?.name) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!contact?.zipCodes?.trim()) {
      return NextResponse.json(
        { error: "Please enter at least one target ZIP code." },
        { status: 400 }
      );
    }

    // Log lead for now — wire to CRM (HubSpot, Airtable, email) in production
    console.log("[Plus One Mailers] New estimate lead:", {
      timestamp: new Date().toISOString(),
      contact,
      campaign,
      estimate: estimate
        ? {
            total: estimate.estimatedTotal,
            homes: estimate.homes,
            perHome: estimate.perHome,
            tier: estimate.tier?.name,
          }
        : null,
    });

    return NextResponse.json({
      success: true,
      message: "Estimate received. We'll follow up within one business day.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 500 }
    );
  }
}

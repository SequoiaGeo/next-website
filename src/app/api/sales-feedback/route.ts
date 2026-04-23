import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, role, rating, feedback } = body;

    if (!name || !feedback) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log to console — wire up to GHL webhook or email in production
    console.log("Sales Training Feedback:", { name, company, email, role, rating, feedback, timestamp: new Date().toISOString() });

    // Optional: forward to a GHL webhook or notification endpoint
    const webhookUrl = process.env.SALES_FEEDBACK_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company: company || "Not provided",
          email: email || "Not provided",
          role: role || "Not provided",
          rating: rating || "Not provided",
          feedback,
          source: "Talk N Sell Pro — Sales Training Tool",
          timestamp: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Feedback submission error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

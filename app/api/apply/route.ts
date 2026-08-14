import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      // If the user hasn't provided the Google Script URL yet, simulate a success response
      console.warn("GOOGLE_SCRIPT_URL is not set. Simulating form submission.");
      return NextResponse.json({ success: true, simulated: true });
    }

    // Send the data to the Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        phone: data.phone || "",
        email: data.email || "",
        location: data.location || "",
        socialMedia: data.socialMedia || "",
        status: data.status || "",
        interestedArm: Array.isArray(data.interestedArm) ? data.interestedArm.join(", ") : "",
        businessSkill: data.businessSkill || "",
        income: data.income || "",
        building: data.building || "",
        goals: data.goals || "",
        declaration: data.declaration ? "Agreed" : "No",
        sourcePathway: data.pathway || "" // just tracking where they clicked from
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: "Failed to submit application to Google Sheets." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

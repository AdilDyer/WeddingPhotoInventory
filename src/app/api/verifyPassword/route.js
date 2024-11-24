import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { password } = await req.json();
    // Parse the JSON response
    const result = password === process.env.ADMIN_PASSWORD;

    // Check if result exists
    if (result) {
      return NextResponse.json({ result, status: 200, verified: true });
    } else {
      return NextResponse.json({
        message: "pass incorrect",
        status: 404,
        verified: false,
      });
    }
  } catch (error) {
    // Return error message with a 400 status code
    return NextResponse.json({ error: error.message, status: 400 });
  }
}

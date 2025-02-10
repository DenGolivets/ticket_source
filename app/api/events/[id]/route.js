import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(`${baseUrl}/db.json`);

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
    }

    const data = await res.json();
    const event = data.events.find((event) => event.id === id);

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

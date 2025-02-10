import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/db.json`);
  if (!res.ok) return NextResponse.json({ error: "Failed to load data" }, { status: 500 });

  const data = await res.json();
  return NextResponse.json(data.events);
}
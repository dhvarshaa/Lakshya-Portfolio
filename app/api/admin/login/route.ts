import { NextResponse } from "next/server";
import { ADMIN_COOKIE, credentialsMatch, sessionToken } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    username?: string;
    password?: string;
  } | null;

  if (!body || !credentialsMatch(body.username ?? "", body.password ?? "")) {
    return NextResponse.json(
      { error: "That username or password is not right." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: new URL(request.url).protocol === "https:",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}

import { createHmac, timingSafeEqual } from "crypto";

const USERNAME = "lakshya";
const PASSWORD = "12345678";
const SECRET = process.env.ADMIN_SESSION_SECRET ?? "lakshya-studios-admin";

export const ADMIN_COOKIE = "admin_session";

export function credentialsMatch(username: string, password: string) {
  return username.trim() === USERNAME && password === PASSWORD;
}

export function sessionToken() {
  return createHmac("sha256", SECRET).update("lakshya-admin").digest("hex");
}

export function isValidSession(token: string | undefined | null) {
  if (!token) return false;
  const expected = sessionToken();
  const given = Buffer.from(token);
  const wanted = Buffer.from(expected);
  if (given.length !== wanted.length) return false;
  return timingSafeEqual(given, wanted);
}

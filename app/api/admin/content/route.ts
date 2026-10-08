import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import { ADMIN_COOKIE, isValidSession } from "@/lib/admin-auth";
import { addBlog, addVideo, readUploads } from "@/lib/uploads";

const blogSchema = z.object({
  kind: z.literal("blog"),
  title: z.string().trim().min(3).max(140),
  excerpt: z.string().trim().min(10).max(280),
  body: z.string().trim().min(20).max(8000),
});

const videoSchema = z.object({
  kind: z.literal("video"),
  title: z.string().trim().min(3).max(140),
  description: z.string().trim().min(10).max(500),
  url: z.string().trim().url().max(500),
});

const payloadSchema = z.discriminatedUnion("kind", [blogSchema, videoSchema]);

async function authorized() {
  const jar = await cookies();
  return isValidSession(jar.get(ADMIN_COOKIE)?.value);
}

export async function GET() {
  if (!(await authorized())) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }
  return NextResponse.json(readUploads());
}

export async function POST(request: Request) {
  if (!(await authorized())) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const parsed = payloadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check the title and the rest of the fields, then try again." },
      { status: 400 },
    );
  }

  try {
    if (parsed.data.kind === "blog") {
      const post = addBlog(parsed.data);
      return NextResponse.json({ ok: true, item: post });
    }
    const video = addVideo(parsed.data);
    return NextResponse.json({ ok: true, item: video });
  } catch {
    return NextResponse.json(
      { error: "The post could not be saved on this server." },
      { status: 500 },
    );
  }
}

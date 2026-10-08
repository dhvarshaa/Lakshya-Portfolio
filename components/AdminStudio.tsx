"use client";

import { FormEvent, useEffect, useState } from "react";

type Kind = "blog" | "video";

type UploadedBlog = {
  slug: string;
  title: string;
  excerpt: string;
  createdAt: string;
};

type UploadedVideo = {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
};

const fieldClass =
  "w-full rounded-xl border border-forest/20 bg-white/70 px-4 py-3 text-sm text-forest placeholder:text-forest/30 outline-none focus:border-forest focus:ring-1 focus:ring-forest";

export function AdminStudio() {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [kind, setKind] = useState<Kind | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [blogs, setBlogs] = useState<UploadedBlog[]>([]);
  const [videos, setVideos] = useState<UploadedVideo[]>([]);

  async function loadContent() {
    const response = await fetch("/api/admin/content");
    if (!response.ok) {
      setSignedIn(false);
      return;
    }
    const data = (await response.json()) as {
      blogs: UploadedBlog[];
      videos: UploadedVideo[];
    };
    setSignedIn(true);
    setBlogs(data.blogs);
    setVideos(data.videos);
  }

  useEffect(() => {
    loadContent().finally(() => setReady(true));
  }, []);

  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setError(null);
    const formData = new FormData(form);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: String(formData.get("username") ?? ""),
        password: String(formData.get("password") ?? ""),
      }),
    });
    setPending(false);
    if (!response.ok) {
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      setError(result.error ?? "Sign-in failed.");
      return;
    }
    await loadContent();
  }

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setSignedIn(false);
    setKind(null);
    setNotice(null);
  }

  async function onCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!kind) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    setPending(true);
    setError(null);
    setNotice(null);

    const payload =
      kind === "blog"
        ? {
            kind,
            title: String(formData.get("title") ?? ""),
            excerpt: String(formData.get("excerpt") ?? ""),
            body: String(formData.get("body") ?? ""),
          }
        : {
            kind,
            title: String(formData.get("title") ?? ""),
            description: String(formData.get("description") ?? ""),
            url: String(formData.get("url") ?? ""),
          };

    const response = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setPending(false);
    const result = (await response.json().catch(() => ({}))) as {
      error?: string;
    };
    if (!response.ok) {
      setError(result.error ?? "Could not save that.");
      return;
    }
    form.reset();
    setNotice(kind === "blog" ? "Blog saved. It is on /blog." : "Video saved. It is on /course.");
    await loadContent();
  }

  if (!ready) {
    return (
      <p className="text-sm text-forest/60">Checking the studio login…</p>
    );
  }

  if (!signedIn) {
    return (
      <form onSubmit={onLogin} className="max-w-md space-y-4">
        <label className="block space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage">
            Username
          </span>
          <input name="username" autoComplete="username" required className={fieldClass} />
        </label>
        <label className="block space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage">
            Password
          </span>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className={fieldClass}
          />
        </label>
        {error ? <p className="text-sm text-terracotta-dark">{error}</p> : null}
        <button
          type="submit"
          disabled={pending}
          className="px-6 py-3 rounded-full bg-forest text-sand-50 text-xs font-semibold tracking-widest uppercase disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-forest/70">Signed in as lakshya.</p>
        <button
          type="button"
          onClick={onLogout}
          className="text-xs font-semibold uppercase tracking-widest text-forest/70 underline underline-offset-4"
        >
          Sign out
        </button>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">
          What are you adding?
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {(["blog", "video"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setKind(option);
                setError(null);
                setNotice(null);
              }}
              className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest border ${
                kind === option
                  ? "bg-forest text-sand-50 border-forest"
                  : "border-forest/20 text-forest hover:bg-sand-200/60"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {kind ? (
        <form onSubmit={onCreate} className="max-w-2xl space-y-4">
          <label className="block space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage">
              Title
            </span>
            <input name="title" required className={fieldClass} />
          </label>
          {kind === "blog" ? (
            <>
              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-sage">
                  Short summary
                </span>
                <textarea name="excerpt" required rows={3} className={fieldClass} />
              </label>
              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-sage">
                  Article
                </span>
                <textarea name="body" required rows={8} className={fieldClass} />
              </label>
            </>
          ) : (
            <>
              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-sage">
                  Description
                </span>
                <textarea name="description" required rows={3} className={fieldClass} />
              </label>
              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-sage">
                  Video link
                </span>
                <input
                  name="url"
                  type="url"
                  required
                  placeholder="https://"
                  className={fieldClass}
                />
              </label>
            </>
          )}
          {error ? <p className="text-sm text-terracotta-dark">{error}</p> : null}
          {notice ? <p className="text-sm text-forest">{notice}</p> : null}
          <button
            type="submit"
            disabled={pending}
            className="px-6 py-3 rounded-full bg-forest text-sand-50 text-xs font-semibold tracking-widest uppercase disabled:opacity-60"
          >
            {pending ? "Saving…" : kind === "blog" ? "Publish blog" : "Add video"}
          </button>
        </form>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="font-serif text-2xl text-forest">Blogs added here</h2>
          {blogs.length === 0 ? (
            <p className="mt-3 text-sm text-forest/60">None yet.</p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {blogs.map((post) => (
                <li key={post.slug}>
                  <a className="underline underline-offset-4" href={`/blog/${post.slug}`}>
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section>
          <h2 className="font-serif text-2xl text-forest">Videos added here</h2>
          {videos.length === 0 ? (
            <p className="mt-3 text-sm text-forest/60">None yet.</p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm">
              {videos.map((video) => (
                <li key={video.id}>
                  <a className="underline underline-offset-4" href="/course">
                    {video.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, posts } from "@/lib/blog";
import { readUploads } from "@/lib/uploads";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute: "Yoga Journal · Lakshya Studios",
  },
  description:
    "Short notes on home practice, yoga with strength training, and morning breathing from Lakshya Studios.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const uploaded = readUploads().blogs;

  return (
    <section className="py-12 max-w-3xl mx-auto px-6 lg:px-12">
      <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
        Journal
      </span>
      <h1 className="font-serif text-3xl sm:text-4xl text-forest mt-2">
        Notes from the practice
      </h1>
      <p className="mt-4 text-forest/75 font-light leading-relaxed">
        Short reads on starting yoga, pairing it with strength work, and breathing
        before the day gets loud.
      </p>

      <div className="mt-12 space-y-8">
        {uploaded.map((post) => (
          <article key={post.slug} className="border-b border-forest/10 pb-8">
            <p className="text-xs uppercase tracking-widest text-sage-muted">
              {formatPostDate(post.createdAt.slice(0, 10))}
            </p>
            <h2 className="font-serif text-2xl text-forest mt-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-sage">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-forest/75 font-light leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-forest/10 pb-8">
            <p className="text-xs uppercase tracking-widest text-sage-muted">
              {formatPostDate(post.date)}
            </p>
            <h2 className="font-serif text-2xl text-forest mt-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-sage">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-forest/75 font-light leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, posts } from "@/lib/blog";
import { readUploads } from "@/lib/uploads";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

function findPost(slug: string) {
  const uploaded = readUploads().blogs.find((post) => post.slug === slug);
  if (uploaded) {
    return {
      title: uploaded.title,
      date: uploaded.createdAt.slice(0, 10),
      paragraphs: uploaded.body.split(/\n\s*\n/).filter(Boolean),
    };
  }
  const placeholder = posts.find((post) => post.slug === slug);
  if (!placeholder) return null;
  return {
    title: placeholder.title,
    date: placeholder.date,
    paragraphs: placeholder.paragraphs,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return { title: "Journal" };
  return {
    title: {
      absolute: `${post.title} · Lakshya Studios`,
    },
    description: post.paragraphs[0],
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  return (
    <article className="py-12 max-w-3xl mx-auto px-6 lg:px-12">
      <Link
        href="/blog"
        className="text-xs font-semibold uppercase tracking-widest text-sage hover:text-forest"
      >
        Journal
      </Link>
      <h1 className="font-serif text-3xl sm:text-4xl text-forest mt-4">
        {post.title}
      </h1>
      <p className="mt-3 text-xs uppercase tracking-widest text-sage-muted">
        {formatPostDate(post.date)}
      </p>
      <div className="mt-8 space-y-5 text-forest/80 font-light leading-relaxed">
        {post.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

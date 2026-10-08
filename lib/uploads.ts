import { randomUUID } from "crypto";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

export type UploadedBlog = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  createdAt: string;
};

export type UploadedVideo = {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
};

type Store = {
  blogs: UploadedBlog[];
  videos: UploadedVideo[];
};

const filePath = path.join(process.cwd(), "data", "uploads.json");

function emptyStore(): Store {
  return { blogs: [], videos: [] };
}

export function readUploads(): Store {
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf8")) as Partial<Store>;
    return {
      blogs: Array.isArray(parsed.blogs) ? parsed.blogs : [],
      videos: Array.isArray(parsed.videos) ? parsed.videos : [],
    };
  } catch {
    return emptyStore();
  }
}

function save(store: Store) {
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(store, null, 2));
}

function slugify(title: string) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
  return base || "post";
}

export function addBlog(input: { title: string; excerpt: string; body: string }) {
  const store = readUploads();
  let slug = slugify(input.title);
  if (store.blogs.some((post) => post.slug === slug)) {
    slug = `${slug}-${Date.now().toString(36)}`;
  }
  const post: UploadedBlog = {
    slug,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    body: input.body.trim(),
    createdAt: new Date().toISOString(),
  };
  store.blogs.unshift(post);
  save(store);
  return post;
}

export function addVideo(input: {
  title: string;
  description: string;
  url: string;
}) {
  const store = readUploads();
  const video: UploadedVideo = {
    id: randomUUID(),
    title: input.title.trim(),
    description: input.description.trim(),
    url: input.url.trim(),
    createdAt: new Date().toISOString(),
  };
  store.videos.unshift(video);
  save(store);
  return video;
}

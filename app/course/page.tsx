import type { Metadata } from "next";
import { readUploads } from "@/lib/uploads";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute: "Course videos · Lakshya Studios",
  },
  description:
    "Video lessons from Lakshya Studios. New classes will be listed here.",
  alternates: { canonical: "/course" },
};

function youtubeId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1);
    if (parsed.hostname.endsWith("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

export default function CoursePage() {
  const videos = readUploads().videos;

  return (
    <section className="py-12 max-w-5xl mx-auto px-6 lg:px-12">
      <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
        Course
      </span>
      <h1 className="font-serif text-3xl sm:text-4xl text-forest mt-2">
        Video lessons
      </h1>
      <p className="mt-4 max-w-2xl text-forest/75 font-light leading-relaxed">
        Classes recorded for students will be listed here. Nothing is published
        until Lakshya adds a video from the studio desk.
      </p>

      {videos.length === 0 ? (
        <p className="mt-12 rounded-3xl border border-dashed border-forest/20 bg-sand-50 px-6 py-10 text-sm text-forest/70">
          No videos yet.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => {
            const id = youtubeId(video.url);
            return (
              <article
                key={video.id}
                className="rounded-3xl border border-forest/10 bg-sand-50 p-6 shadow-card-gentle"
              >
                {id ? (
                  <div className="aspect-video overflow-hidden rounded-2xl bg-forest">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                <h2 className="font-serif text-2xl text-forest mt-5">{video.title}</h2>
                <p className="mt-3 text-sm text-forest/75 font-light leading-relaxed">
                  {video.description}
                </p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-forest underline underline-offset-4"
                >
                  Open video
                </a>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

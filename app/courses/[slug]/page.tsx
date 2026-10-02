import type { Metadata } from "next";
import { getCourseBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course", robots: { index: false, follow: false } };
  return {
    title: course.title,
    description: course.summary,
    robots: { index: false, follow: false },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <section className="py-24 max-w-3xl mx-auto px-6 lg:px-12">
      <h1 className="font-serif text-4xl text-forest mb-4">{course.title}</h1>
      <p className="text-forest/75 font-light mb-8">{course.summary}</p>
      <p className="font-serif text-2xl text-forest mb-8">
        ₹{(course.pricePaise / 100).toLocaleString("en-IN")}
      </p>
      <h2 className="text-xs uppercase tracking-widest font-semibold text-terracotta mb-3">
        Lessons
      </h2>
      <ol className="space-y-2 text-sm text-forest/80 list-decimal list-inside">
        {course.lessons.map((lesson) => (
          <li key={lesson.title}>{lesson.title}</li>
        ))}
      </ol>
    </section>
  );
}

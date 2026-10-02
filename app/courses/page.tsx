import type { Metadata } from "next";
import { getCourses } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Courses",
  robots: { index: false, follow: false },
};

/** Phase 2: published courses appear here. Hidden from nav until then. */
export default function CoursesPage() {
  const courses = getCourses().filter((c) => c.published);
  if (courses.length === 0) notFound();

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <h1 className="font-serif text-4xl text-forest mb-8">Courses</h1>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.slug}>
            <a className="text-forest underline" href={`/courses/${course.slug}`}>
              {course.title}
            </a>
            <p className="text-sm text-forest/70">{course.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

import type { Metadata } from "next";
import { AdminStudio } from "@/components/AdminStudio";

export const metadata: Metadata = {
  title: {
    absolute: "Studio admin · Lakshya Studios",
  },
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-6 lg:px-12">
      <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
        Studio
      </span>
      <h1 className="font-serif text-3xl sm:text-4xl text-forest mt-2 mb-8">
        Add a blog or a video
      </h1>
      <AdminStudio />
    </section>
  );
}

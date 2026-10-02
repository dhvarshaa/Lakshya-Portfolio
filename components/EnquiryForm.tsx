"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/site";

type Status = "idle" | "done";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const honeypot = new FormData(form).get("company");
    if (typeof honeypot === "string" && honeypot.trim()) return;

    // Day 2 wires this to /api/enquiry + Resend.
    setStatus("done");
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      <div>
        <span className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
          I&apos;m interested in
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {[
            { value: "online", label: "Online yoga" },
            { value: "in_person", label: "In-person yoga" },
            { value: "personal", label: "Personal training" },
          ].map((option, index) => (
            <label key={option.value} className="cursor-pointer">
              <input
                className="peer sr-only"
                defaultChecked={index === 0}
                name="class_type"
                type="radio"
                value={option.value}
              />
              <div className="p-3 text-center rounded-xl border border-forest/15 peer-checked:border-forest peer-checked:bg-forest peer-checked:text-sand-50 text-xs font-medium text-forest hover:bg-sand-100 transition-colors">
                {option.label}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5"
            htmlFor="fullName"
          >
            Name
          </label>
          <input
            className="w-full rounded-xl border border-forest/20 bg-white/70 px-4 py-3 text-sm focus:border-forest focus:ring-1 focus:ring-forest text-forest placeholder:text-forest/30 outline-none"
            id="fullName"
            name="name"
            placeholder="Your name"
            required
            type="text"
            autoComplete="name"
          />
        </div>
        <div>
          <label
            className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5"
            htmlFor="phone"
          >
            Phone / WhatsApp
          </label>
          <input
            className="w-full rounded-xl border border-forest/20 bg-white/70 px-4 py-3 text-sm focus:border-forest focus:ring-1 focus:ring-forest text-forest placeholder:text-forest/30 outline-none"
            id="phone"
            name="phone"
            placeholder="98xxx xxxxx"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5"
            htmlFor="goal"
          >
            Main goal
          </label>
          <select
            className="w-full rounded-xl border border-forest/20 bg-white/70 px-4 py-3 text-sm focus:border-forest focus:ring-1 focus:ring-forest text-forest outline-none"
            id="goal"
            name="goal"
            defaultValue="Weight loss"
          >
            <option>Weight loss</option>
            <option>Muscle gain / strength</option>
            <option>Flexibility &amp; posture</option>
            <option>Stress &amp; general wellness</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label
            className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5"
            htmlFor="timeFrame"
          >
            Preferred time
          </label>
          <select
            className="w-full rounded-xl border border-forest/20 bg-white/70 px-4 py-3 text-sm focus:border-forest focus:ring-1 focus:ring-forest text-forest outline-none"
            id="timeFrame"
            name="preferred_time"
            defaultValue="Morning"
          >
            <option>Morning</option>
            <option>Evening</option>
            <option>Weekend</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label
          className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5"
          htmlFor="message"
        >
          Anything Lakshya should know?{" "}
          <span className="normal-case tracking-normal font-normal text-forest/50">
            (optional)
          </span>
        </label>
        <textarea
          className="w-full rounded-xl border border-forest/20 bg-white/70 px-4 py-3 text-sm focus:border-forest focus:ring-1 focus:ring-forest text-forest placeholder:text-forest/30 outline-none"
          id="message"
          name="message"
          placeholder="Injuries, health conditions, or experience level"
          rows={3}
        />
      </div>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <button
        className="w-full py-4 rounded-full bg-forest text-sand-50 hover:bg-forest-700 text-xs font-bold uppercase tracking-widest transition-colors shadow-md disabled:opacity-60"
        type="submit"
        disabled={status === "done"}
      >
        Send enquiry
      </button>

      {status === "done" ? (
        <p
          className="text-sm text-sage-dark bg-sage-subtle rounded-xl px-4 py-3"
          role="status"
        >
          Thanks. Lakshya will get back to you within a day. For a faster reply,{" "}
          <a
            className="underline font-semibold"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            message him on WhatsApp
          </a>
          .{" "}
          <span className="text-forest/50">
            (Email delivery lands on Day 2.)
          </span>
        </p>
      ) : null}
    </form>
  );
}

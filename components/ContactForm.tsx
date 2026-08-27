"use client";

import { useState, type FormEvent } from "react";
import type { ContactContent } from "@/content/contact";

type Status = "idle" | "submitting" | "success" | "validation-error" | "error";

const inputClass =
  "w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-sm text-smoke placeholder:text-white/30 outline-none transition-colors focus:border-navy-400";

export function ContactForm({ content }: { content: ContactContent["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const brief = String(data.get("brief") ?? "").trim();

    if (!fullName || !phone || !brief) {
      setStatus("validation-error");
      return;
    }

    setStatus("submitting");

    // TODO: wire this to the real contact backend/endpoint once available.
    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <h2 className="font-heading text-xl font-semibold md:text-2xl">{content.heading}</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/60">
          <span>
            {content.fields.fullName} <span className="text-navy-300">*</span>
          </span>
          <input name="fullName" type="text" required className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/60">
          {content.fields.company}
          <input name="company" type="text" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/60">
          <span>
            {content.fields.phone} <span className="text-navy-300">*</span>
          </span>
          <input name="phone" type="tel" required dir="ltr" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/60">
          {content.fields.email}
          <input name="email" type="email" dir="ltr" className={inputClass} />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm text-white/60">
        {content.fields.need}
        <select name="need" defaultValue="" className={inputClass}>
          <option value="" disabled>
            {content.fields.needPlaceholder}
          </option>
          {content.fields.needOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm text-white/60">
        <span>
          {content.fields.brief} <span className="text-navy-300">*</span>
        </span>
        <textarea
          name="brief"
          required
          rows={5}
          placeholder={content.fields.briefPlaceholder}
          className={inputClass}
        />
      </label>

      <p className="text-xs text-white/50">{content.requiredNote}</p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-navy-400 bg-navy-400 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-navy-300 disabled:opacity-60"
      >
        {status === "submitting" ? content.submitting : content.submit}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm text-navy-300">
          {content.status.success}
        </p>
      )}
      {status === "validation-error" && (
        <p role="alert" className="text-sm text-red-400">
          {content.status.validationError}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {content.status.error}
        </p>
      )}
    </form>
  );
}

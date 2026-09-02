"use client";

import { useRef, useState, type FormEvent } from "react";
import type { ContactContent } from "@/content/contact";

type Status = "idle" | "submitting" | "success" | "validation-error" | "error";

const REQUIRED_FIELDS = ["fullName", "phone", "brief"] as const;
type RequiredField = (typeof REQUIRED_FIELDS)[number];

const inputClass =
  "w-full rounded-md border border-ink-border bg-ink px-4 py-3 text-sm text-smoke placeholder:text-white/30 outline-none transition-colors focus-visible:border-navy-400 focus-visible:ring-2 focus-visible:ring-navy-400/40";

const invalidInputClass = "border-red-400";

export function ContactForm({ content }: { content: ContactContent["form"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [invalidFields, setInvalidFields] = useState<Set<RequiredField>>(new Set());

  const fieldRefs = {
    fullName: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    brief: useRef<HTMLTextAreaElement>(null),
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const values: Record<RequiredField, string> = {
      fullName: String(data.get("fullName") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      brief: String(data.get("brief") ?? "").trim(),
    };

    const missing = REQUIRED_FIELDS.filter((field) => !values[field]);

    if (missing.length > 0) {
      setInvalidFields(new Set(missing));
      setStatus("validation-error");
      fieldRefs[missing[0]].current?.focus();
      return;
    }

    setInvalidFields(new Set());
    setStatus("submitting");

    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    data.append("subject", `New contact form submission — ${values.fullName}`);
    data.append("from_name", "artinext.ir contact form");

    // multipart/form-data is a CORS-safelisted content type, so this skips the
    // preflight OPTIONS request — Web3Forms doesn't return CORS headers on
    // preflight responses, which silently kills a JSON-content-type submission
    // in every browser. A successful multipart submission returns Web3Forms'
    // HTML thank-you page rather than JSON, so success is read off the HTTP
    // status instead of assuming a JSON body.
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    })
      .then(async (response) => {
        if (!response.ok) {
          setStatus("error");
          return;
        }
        const contentType = response.headers.get("content-type") ?? "";
        const succeeded = contentType.includes("application/json")
          ? Boolean((await response.json()).success)
          : true;
        setStatus(succeeded ? "success" : "error");
        if (succeeded) form.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <h2 className="font-heading text-xl font-semibold md:text-2xl">{content.heading}</h2>

      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/60">
          <span>
            {content.fields.fullName} <span className="text-navy-300">*</span>
          </span>
          <input
            ref={fieldRefs.fullName}
            name="fullName"
            type="text"
            required
            autoComplete="name"
            aria-invalid={invalidFields.has("fullName")}
            className={`${inputClass} ${invalidFields.has("fullName") ? invalidInputClass : ""}`}
          />
          {invalidFields.has("fullName") && (
            <span role="alert" className="text-xs text-red-400">
              {content.status.validationError}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/60">
          {content.fields.company}
          <input name="company" type="text" autoComplete="organization" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/60">
          <span>
            {content.fields.phone} <span className="text-navy-300">*</span>
          </span>
          <input
            ref={fieldRefs.phone}
            name="phone"
            type="tel"
            required
            dir="ltr"
            autoComplete="tel"
            aria-invalid={invalidFields.has("phone")}
            className={`${inputClass} ${invalidFields.has("phone") ? invalidInputClass : ""}`}
          />
          {invalidFields.has("phone") && (
            <span role="alert" className="text-xs text-red-400">
              {content.status.validationError}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/60">
          {content.fields.email}
          <input name="email" type="email" dir="ltr" autoComplete="email" className={inputClass} />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm text-white/60">
        {content.fields.need}
        <select name="need" defaultValue="" autoComplete="off" className={inputClass}>
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
          ref={fieldRefs.brief}
          name="brief"
          required
          rows={5}
          placeholder={content.fields.briefPlaceholder}
          aria-invalid={invalidFields.has("brief")}
          className={`${inputClass} ${invalidFields.has("brief") ? invalidInputClass : ""}`}
        />
        {invalidFields.has("brief") && (
          <span role="alert" className="text-xs text-red-400">
            {content.status.validationError}
          </span>
        )}
      </label>

      <p className="text-xs text-white/50">{content.requiredNote}</p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-navy-400 bg-navy-400 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-navy-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-60"
      >
        {status === "submitting" && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v3a5 5 0 0 0-5 5H4Z" />
          </svg>
        )}
        {content.submit}
        {status === "submitting" && <span className="sr-only">{content.submitting}</span>}
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

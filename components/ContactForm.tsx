"use client";

import { useRef, useState, type FormEvent } from "react";
import type { ContactContent } from "@/content/contact";

type Status = "idle" | "submitting" | "success" | "validation-error" | "error";

const REQUIRED_FIELDS = ["fullName", "phone", "brief"] as const;
type RequiredField = (typeof REQUIRED_FIELDS)[number];

const inputClass =
  "w-full rounded-[4px] border border-line bg-ink px-4 py-3 text-[0.9375rem] text-fg outline-none transition-colors duration-300 placeholder:text-slate/70 focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/30";

const invalidInputClass = "border-amber";

const labelClass = "flex flex-col gap-2 text-[0.8125rem] text-slate";

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
    // preflight OPTIONS request — Web3Forms does not return CORS headers on
    // preflight responses, which silently kills a JSON-content-type submission
    // in every browser. A successful multipart submission returns the Web3Forms
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
      <h2 className="text-[1.125rem] font-semibold tracking-[-0.01em] text-fg md:text-[1.25rem]">
        {content.heading}
      </h2>

      {/* Honeypot. Hidden from people and from assistive tech; bots fill it. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          <span>
            {content.fields.fullName} <span className="text-sage">*</span>
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
            <span role="alert" className="text-[0.75rem] text-amber">
              {content.status.validationError}
            </span>
          )}
        </label>

        <label className={labelClass}>
          {content.fields.company}
          <input name="company" type="text" autoComplete="organization" className={inputClass} />
        </label>

        <label className={labelClass}>
          <span>
            {content.fields.phone} <span className="text-sage">*</span>
          </span>
          <input
            ref={fieldRefs.phone}
            name="phone"
            type="tel"
            required
            dir="ltr"
            autoComplete="tel"
            aria-invalid={invalidFields.has("phone")}
            className={`${inputClass} lat ${invalidFields.has("phone") ? invalidInputClass : ""}`}
          />
          {invalidFields.has("phone") && (
            <span role="alert" className="text-[0.75rem] text-amber">
              {content.status.validationError}
            </span>
          )}
        </label>

        <label className={labelClass}>
          {content.fields.email}
          <input
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            className={`${inputClass} lat`}
          />
        </label>
      </div>

      <label className={labelClass}>
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

      <label className={labelClass}>
        <span>
          {content.fields.brief} <span className="text-sage">*</span>
        </span>
        <textarea
          ref={fieldRefs.brief}
          name="brief"
          required
          /* Four, not five: the whole form has to sit inside one screen
             beside the aside, and the fifth row was what pushed the submit
             button under the fold on a 900px viewport. */
          rows={4}
          placeholder={content.fields.briefPlaceholder}
          aria-invalid={invalidFields.has("brief")}
          className={`${inputClass} ${invalidFields.has("brief") ? invalidInputClass : ""}`}
        />
        {invalidFields.has("brief") && (
          <span role="alert" className="text-[0.75rem] text-amber">
            {content.status.validationError}
          </span>
        )}
      </label>

      <p className="text-[0.75rem] text-slate">{content.requiredNote}</p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-[4px] border border-sage bg-sage px-6 py-3 text-[0.875rem] font-medium text-ink transition-colors duration-300 hover:bg-transparent hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-60"
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
        <p role="status" className="text-[0.875rem] text-sage">
          {content.status.success}
        </p>
      )}
      {status === "validation-error" && (
        <p role="alert" className="text-[0.875rem] text-amber">
          {content.status.validationError}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-[0.875rem] text-amber">
          {content.status.error}
        </p>
      )}
    </form>
  );
}

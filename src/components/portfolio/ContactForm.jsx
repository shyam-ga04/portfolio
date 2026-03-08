import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { CheckCircle2, X } from "lucide-react"
import { SITE_TEXT } from "../../constants/content"
import {
  validateEmail,
  validateMessage,
  validateName,
  validateSubject,
} from "../../utils/validation"

const inputClassName =
  "w-full rounded-md border border-slate-700 bg-[#101214] px-3 py-2 text-sm text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-orange-400"

const errorClassName = "mt-1 text-xs text-red-400"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      const body = encodeURIComponent(
        `Name: ${value.name}\nEmail: ${value.email}\n\n${value.message}`,
      )
      setSubmitted(true)
      window.setTimeout(() => {
        window.location.href = `mailto:${SITE_TEXT.form.destinationEmail}?subject=${encodeURIComponent(
          value.subject,
        )}&body=${body}`
      }, 300)
      window.setTimeout(() => setSubmitted(false), 3500)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full"
    >
      <form.Field
        name="name"
        validators={{
          onChange: () => undefined,
          onBlur: ({ value }) => validateName(value),
        }}
      >
        {(field) => (
          <div>
            <label
              htmlFor={field.name}
              className="mb-1 block text-sm text-slate-300"
            >
              {SITE_TEXT.form.nameLabel}
            </label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClassName}
              placeholder={SITE_TEXT.form.namePlaceholder}
            />
            {field.state.meta.isTouched && field.state.meta.errors[0] ? (
              <p className={errorClassName}>{field.state.meta.errors[0]}</p>
            ) : null}
          </div>
        )}
      </form.Field>

      <form.Field
        name="email"
        validators={{
          onChange: () => undefined,
          onBlur: ({ value }) => validateEmail(value),
        }}
      >
        {(field) => (
          <div>
            <label
              htmlFor={field.name}
              className="mb-1 block text-sm text-slate-300"
            >
              {SITE_TEXT.form.emailLabel}
            </label>
            <input
              id={field.name}
              name={field.name}
              type="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClassName}
              placeholder={SITE_TEXT.form.emailPlaceholder}
            />
            {field.state.meta.isTouched && field.state.meta.errors[0] ? (
              <p className={errorClassName}>{field.state.meta.errors[0]}</p>
            ) : null}
          </div>
        )}
      </form.Field>

      <form.Field
        name="subject"
        validators={{
          onChange: () => undefined,
          onBlur: ({ value }) => validateSubject(value),
        }}
      >
        {(field) => (
          <div className="md:col-span-2">
            <label
              htmlFor={field.name}
              className="mb-1 block text-sm text-slate-300"
            >
              {SITE_TEXT.form.subjectLabel}
            </label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClassName}
              placeholder={SITE_TEXT.form.subjectPlaceholder}
            />
            {field.state.meta.isTouched && field.state.meta.errors[0] ? (
              <p className={errorClassName}>{field.state.meta.errors[0]}</p>
            ) : null}
          </div>
        )}
      </form.Field>

      <form.Field
        name="message"
        validators={{
          onChange: () => undefined,
          onBlur: ({ value }) => validateMessage(value),
        }}
      >
        {(field) => (
          <div className="md:col-span-2">
            <label
              htmlFor={field.name}
              className="mb-1 block text-sm text-slate-300"
            >
              {SITE_TEXT.form.messageLabel}
            </label>
            <textarea
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={`${inputClassName} min-h-32 resize-y`}
              placeholder={SITE_TEXT.form.messagePlaceholder}
            />
            {field.state.meta.isTouched && field.state.meta.errors[0] ? (
              <p className={errorClassName}>{field.state.meta.errors[0]}</p>
            ) : null}
          </div>
        )}
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="md:col-span-2 w-fit rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? SITE_TEXT.form.sending : SITE_TEXT.form.sendMessage}
          </button>
        )}
      </form.Subscribe>

      {submitted ? (
        <div
          role="alert"
          className="md:col-span-2 flex items-start justify-between gap-3 rounded-md border border-orange-500/40 bg-[#1b140f] px-4 py-3 text-sm text-orange-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        >
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-orange-400" />
            <p>{SITE_TEXT.form.successMessage}</p>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="rounded p-1 text-orange-300 transition hover:bg-orange-500/10 hover:text-orange-200"
            aria-label={SITE_TEXT.form.closeAlertAria}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </form>
  )
}

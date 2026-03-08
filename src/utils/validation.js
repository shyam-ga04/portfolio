import { SITE_TEXT } from "../constants/content"

export const validateName = (value) =>
  value.trim().length < 2 ? SITE_TEXT.form.nameError : undefined

export const validateEmail = (value) => {
  if (!value.trim()) return SITE_TEXT.form.emailRequiredError
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? undefined
    : SITE_TEXT.form.emailInvalidError
}

export const validateSubject = (value) =>
  value.trim().length < 4 ? SITE_TEXT.form.subjectError : undefined

export const validateMessage = (value) =>
  value.trim().length < 15 ? SITE_TEXT.form.messageError : undefined

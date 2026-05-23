import type { Messages } from "./i18n";

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateContactForm(values: ContactFormValues, messages: Messages): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) errors.name = messages.contact.validation.name;
  if (!isEmail(values.email.trim())) errors.email = messages.contact.validation.email;
  if (values.subject.trim().length < 3) errors.subject = messages.contact.validation.subject;
  if (values.message.trim().length < 10) errors.message = messages.contact.validation.message;

  return errors;
}

export function mapContactApiErrors(
  apiErrors: Record<string, string> | undefined,
  messages: Messages,
): ContactFormErrors {
  if (!apiErrors) return {};
  const errors: ContactFormErrors = {};

  if (apiErrors.name) errors.name = messages.contact.validation.name;
  if (apiErrors.email) errors.email = messages.contact.validation.email;
  if (apiErrors.subject) errors.subject = messages.contact.validation.subject;
  if (apiErrors.message) errors.message = messages.contact.validation.message;

  return errors;
}


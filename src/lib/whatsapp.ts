/**
 * WhatsApp deep link utilities.
 * TODO: Owner to confirm the WhatsApp number before launch.
 */

/** WhatsApp number in the format required by wa.me (no spaces, no +) */
export const WHATSAPP_NUMBER = "919164557027";

/** Generate a WhatsApp deep link with a pre-filled message */
export function waLink(msg: string = "Hello, I need your services"): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

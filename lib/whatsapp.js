// Olympia Fitness WhatsApp business number, in international format
// (no + or leading zero) as required by the wa.me link format.
// Replace this if the business number changes.
export const WHATSAPP_NUMBER = "919058858077";

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Builds the pre-filled enquiry message from cart items + customer details.
// This is the "single combined enquiry" flow agreed for the project: one
// message covering every item, rather than one WhatsApp chat per product.
export function buildCartMessage(items, customer) {
  const lines = [];
  lines.push("Hi Olympia Fitness, I'd like to enquire about:");
  lines.push("");
  items.forEach((item) => {
    lines.push(`- ${item.name} x${item.qty}`);
  });
  lines.push("");
  if (customer?.name) lines.push(`Name: ${customer.name}`);
  if (customer?.phone) lines.push(`Phone: ${customer.phone}`);
  if (customer?.city) lines.push(`City: ${customer.city}`);
  if (customer?.note) lines.push(`Note: ${customer.note}`);
  return lines.join("\n");
}

export function buildSingleProductMessage(productName) {
  return `Hi Olympia Fitness, I'd like to enquire about the ${productName}.`;
}

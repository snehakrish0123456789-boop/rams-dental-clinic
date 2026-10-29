export const CLINIC_PHONE = "09884053440";
export const CLINIC_PHONE_TEL = "tel:+919884053440";
export const CLINIC_WHATSAPP_NUM = "919884053440";

export const CLINIC_ADDRESS =
  "No. 512A, Natesan Colony, East Coast Road (ECR), opposite Mega Mart, Thiruvanmiyur, Chennai, Tamil Nadu";

export const CLINIC_AREA = "Kottivakkam / Thiruvanmiyur, Chennai";

export const CLINIC_HOURS = "9:00 AM – 9:00 PM (Please confirm with clinic)";

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(CLINIC_ADDRESS);

export function openWhatsApp(message: string): void {
  const url = `https://wa.me/${CLINIC_WHATSAPP_NUM}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

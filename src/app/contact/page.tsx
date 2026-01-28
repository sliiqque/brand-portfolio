import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Book a Consultation with SLIIQQUE",
  description: "Book a free consultation to discuss your frontend or Web3 project. Available for select freelance and retainer engagements.",
};

export default function ContactPage() {
  return <ContactContent />;
}

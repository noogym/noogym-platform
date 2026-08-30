import type { Metadata } from "next";
import { EventSubmissionForm } from "./EventSubmissionForm";

export const metadata: Metadata = {
  title: "Divulgar evento",
  description: "Envie um evento fitness para revisão editorial no Noogym.",
};

export default function EventSubmissionPage() {
  return <EventSubmissionForm />;
}

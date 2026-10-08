import type { Metadata } from "next";
import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Eventos Noogym: desafios, competições, workshops, corridas e experiências da comunidade fitness.",
};

export default function EventsPage() {
  return <EventsClient />;
}

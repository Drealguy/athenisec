import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Athenisec",
  description:
    "Request a free consultation with Athenisec to talk through your compliance needs.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white pt-20">
      <ContactForm />
    </main>
  );
}

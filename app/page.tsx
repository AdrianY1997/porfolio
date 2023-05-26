"use client";

import { Section } from "@/components/section";
import { ContactSection } from "@/components/web/home/contactSection";
import { HomeSection } from "@/components/web/home/homeSection";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <div>
        <Section removeTop>
          <HomeSection />
        </Section>
        <Section>
          <ContactSection />
        </Section>
      </div>
    </main>
  );
}

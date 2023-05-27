"use client";

import { Section } from "@/components/section";
import { AboutSection } from "@/components/web/home/aboutSection";
import { ContactSection } from "@/components/web/home/contactSection";
import { HomeSection } from "@/components/web/home/homeSection";

export default function Page() {
  return (
    <div className="bg-[#f5f5f5]">
      <Section removeTop>
        <HomeSection />
      </Section>
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <ContactSection />
      </Section>
    </div>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "DigitalMasonry Terms of Service — the terms governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold tracking-widest text-indigo-300 uppercase">
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            Legal
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="text-zinc-500 text-sm">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "1. Acceptance of Terms",
              content: `By accessing and using the DigitalMasonry website (digitalmasonry.co.uk) and engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.`,
            },
            {
              title: "2. Services",
              content: `DigitalMasonry provides software development, design, and digital product services. The specific scope, deliverables, timelines, and pricing for each engagement are defined in individual project agreements or statements of work (SOWs) signed between DigitalMasonry and the client.`,
            },
            {
              title: "3. Intellectual Property",
              content: `Upon full payment of all invoices, clients receive full ownership of all custom code, designs, and deliverables created specifically for their project. DigitalMasonry retains the right to use third-party libraries, frameworks, and tools subject to their respective licenses.\n\nDigitalMasonry retains the right to display completed work in its portfolio unless explicitly agreed otherwise in writing.`,
            },
            {
              title: "4. Payment Terms",
              content: `Payment terms are specified in individual project agreements. Standard terms require:\n• 50% deposit before project commencement\n• Remaining balance due upon project completion\n• Invoices due within 14 days of issuance\n• Late payments subject to 1.5% monthly interest`,
            },
            {
              title: "5. Confidentiality",
              content: `Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes business strategies, technical specifications, and client data. Confidentiality obligations survive termination of the agreement.`,
            },
            {
              title: "6. Warranties and Guarantees",
              content: `DigitalMasonry warrants that all deliverables will conform to the agreed specifications. We provide a 12-month warranty period during which we will fix defects at no additional charge.\n\nThis warranty does not cover changes in requirements, third-party service issues, or modifications made by the client or other parties.`,
            },
            {
              title: "7. Limitation of Liability",
              content: `To the maximum extent permitted by law, DigitalMasonry's total liability for any claim arising from our services shall not exceed the total fees paid for the specific project giving rise to the claim. We are not liable for indirect, incidental, special, or consequential damages.`,
            },
            {
              title: "8. Project Termination",
              content: `Either party may terminate a project agreement with 14 days written notice. Upon termination, the client is responsible for payment for all work completed to date. DigitalMasonry will deliver all completed work and documentation.`,
            },
            {
              title: "9. Governing Law",
              content: `These Terms of Service are governed by the laws of England and Wales. Any disputes arising out of or relating to these Terms shall be resolved through binding arbitration in London, United Kingdom.`,
            },
            {
              title: "10. Changes to Terms",
              content: `We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the new Terms.`,
            },
            {
              title: "11. Contact",
              content: `For questions about these Terms, contact us at:\n\nDigitalMasonry\nEmail: ${siteConfig.email}\nLocation: ${siteConfig.location}`,
            },
          ].map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-white/8 pb-3">
                {section.title}
              </h2>
              <div className="text-zinc-400 leading-relaxed whitespace-pre-line text-sm">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

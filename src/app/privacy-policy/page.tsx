import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DigitalMasonry Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold tracking-widest text-indigo-300 uppercase">
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            Legal
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: `We collect information you provide directly to us, such as when you fill out our contact form, book a discovery call, or communicate with us via email. This may include your name, email address, company name, and project details.\n\nWe also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited.`,
            },
            {
              title: "2. How We Use Your Information",
              content: `We use the information we collect to:\n• Respond to your inquiries and provide services\n• Send you project updates and relevant communications\n• Improve our website and services\n• Comply with legal obligations\n\nWe do not sell, rent, or share your personal information with third parties for marketing purposes.`,
            },
            {
              title: "3. Cookies and Tracking",
              content: `We use essential cookies to ensure our website functions properly. We may use analytics cookies (such as those from Vercel Analytics or similar tools) to understand how visitors use our site. You can control cookie settings through your browser preferences.`,
            },
            {
              title: "4. Data Security",
              content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`,
            },
            {
              title: "5. Data Retention",
              content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are retained for 24 months unless you request deletion.`,
            },
            {
              title: "6. Your Rights",
              content: `Depending on your location, you may have the right to:\n• Access your personal data\n• Correct inaccurate data\n• Request deletion of your data\n• Object to processing of your data\n• Request a copy of your data in a portable format\n\nTo exercise these rights, contact us at ${siteConfig.email}.`,
            },
            {
              title: "7. Third-Party Services",
              content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies when you visit them.`,
            },
            {
              title: "8. Changes to This Policy",
              content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.`,
            },
            {
              title: "9. Contact Us",
              content: `If you have any questions about this Privacy Policy, please contact us at:\n\nDigitalMasonry\nEmail: ${siteConfig.email}\nLocation: ${siteConfig.location}`,
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

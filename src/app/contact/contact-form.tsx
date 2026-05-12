"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { budgetRanges } from "@/constants/site";

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

const services = [
  "Website Development",
  "Web Application",
  "Mobile App",
  "SaaS Product",
  "UI/UX Design",
  "MVP Development",
  "AI Integration",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    if (form.message.trim().length < 20)
      newErrors.message = "Tell us a bit more (at least 20 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service }),
      });

      const data = await res.json() as { error?: string };

      if (!res.ok) {
        toast.error("Failed to send", {
          description: data.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setForm(initialState);
      setService("");
      toast.success("Message sent!", {
        description:
          "Thanks for reaching out. We'll get back to you within 24 hours.",
      });
    } catch {
      toast.error("Network error", {
        description:
          "Could not reach the server. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-7 md:p-10"
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-2">Start a Project</h2>
        <p className="text-sm text-zinc-500">
          Fill in the details below and we&apos;ll craft a tailored proposal for
          you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange("name")}
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={handleChange("email")}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="company">Company / Startup</Label>
            <Input
              id="company"
              placeholder="Acme Inc. (optional)"
              value={form.company}
              onChange={handleChange("company")}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="budget">Budget Range</Label>
            <select
              id="budget"
              value={form.budget}
              onChange={handleChange("budget")}
              className="flex h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 transition-all duration-200 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 hover:border-white/20 cursor-pointer"
            >
              <option value="" className="bg-zinc-900 text-zinc-400">
                Select budget...
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range} className="bg-zinc-900">
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Service type */}
        <div className="space-y-2">
          <Label>Service Needed</Label>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setService(service === s ? "" : s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  service === s
                    ? "bg-indigo-600 text-white border border-indigo-500 shadow-md shadow-indigo-500/20"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="message">
            Project Details <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your project — what you're building, your goals, timeline, and any specific requirements..."
            value={form.message}
            onChange={handleChange("message")}
            className="min-h-35"
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
          />
          <div className="flex items-center justify-between">
            {errors.message ? (
              <p id="message-error" className="text-xs text-red-400">
                {errors.message}
              </p>
            ) : (
              <span />
            )}
            <span className="text-xs text-zinc-600">
              {form.message.length} / 2000
            </span>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          variant="gradient"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={17} />
              Send Message
            </>
          )}
        </Button>

        <p className="text-xs text-zinc-600 text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-zinc-400">
            Privacy Policy
          </a>
          . We&apos;ll never share your information.
        </p>
      </form>
    </motion.div>
  );
}

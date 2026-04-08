"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Link,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { Section } from "../Section";
import { cn } from "@/lib/cn";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    if (status === "sending") return false;
    return Boolean(name.trim() && email.trim() && message.trim());
  }, [email, message, name, status]);

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="card p-6 lg:col-span-7">
          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!canSubmit) return;

              setStatus("sending");
              setError(null);

              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim(),
                  }),
                });
                const data = (await res.json()) as { ok?: boolean; error?: string };
                if (!res.ok || !data.ok) {
                  throw new Error(data.error || "Failed to send message");
                }

                setStatus("sent");
                setName("");
                setEmail("");
                setMessage("");
              } catch (err) {
                setStatus("error");
                setError(err instanceof Error ? err.message : "Failed to send");
              }
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={cn(
                    "mt-2 h-12 w-full rounded-2xl border border-border bg-card-2/30 px-4 text-sm text-foreground outline-none",
                    "focus:ring-2 focus:ring-accent/40"
                  )}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "mt-2 h-12 w-full rounded-2xl border border-border bg-card-2/30 px-4 text-sm text-foreground outline-none",
                    "focus:ring-2 focus:ring-accent/40"
                  )}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={cn(
                  "mt-2 min-h-32 w-full resize-y rounded-2xl border border-border bg-card-2/30 px-4 py-3 text-sm text-foreground outline-none",
                  "focus:ring-2 focus:ring-accent/40"
                )}
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={!canSubmit}
                className={cn(
                  "group inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-5",
                  "bg-white text-black font-medium transition-colors hover:bg-white/90",
                  "disabled:opacity-60 disabled:cursor-not-allowed",
                  "focus:outline-none focus:ring-2 focus:ring-accent/40"
                )}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {status === "sent" ? (
                <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                  Your message has been sent
                </div>
              ) : status === "error" ? (
                <div className="inline-flex items-center gap-2 text-sm font-medium text-rose-300">
                  <AlertTriangle className="h-5 w-5" />
                  {error ?? "Failed to send"}
                </div>
              ) : null}
            </div>
          </form>
        </div>

        <div className="card p-6 lg:col-span-5">
          <p className="text-sm font-semibold text-foreground">
            Direct contact
          </p>
          <div className="mt-4 space-y-3">
            <a
              href="tel:03702914587"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card-2/30 px-4 py-3 text-sm text-foreground transition-colors hover:bg-card-2/70"
            >
              <Phone className="h-4 w-4 text-white/80" />
              <span className="text-muted">Phone</span>
              <span className="ml-auto font-medium text-foreground">
                0370-2914587
              </span>
            </a>
            <a
              href="mailto:mwasiqk5@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card-2/30 px-4 py-3 text-sm text-foreground transition-colors hover:bg-card-2/70"
            >
              <Mail className="h-4 w-4 text-white/80" />
              <span className="text-muted">Email</span>
              <span className="ml-auto font-medium text-foreground">
                mwasiqk5@gmail.com
              </span>
            </a>
          </div>

          <p className="mt-8 text-sm font-semibold text-foreground">
            Social
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/_khanwasiq?igsh=MXRtYnQ4bHZkZjY1eQ%3D%3D"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card-2/30 text-sm font-medium text-foreground transition-colors hover:bg-card-2/70"
              aria-label="Instagram"
            >
              <Link className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="https://pk.linkedin.com/in/muhammad-wasiq-khan-3b79412b6"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card-2/30 text-sm font-medium text-foreground transition-colors hover:bg-card-2/70"
              aria-label="LinkedIn"
            >
              <Link className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}


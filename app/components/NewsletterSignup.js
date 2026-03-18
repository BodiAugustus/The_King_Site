// components/NewsletterSignup.jsx  (or paste directly in page.js if preferred)
"use client";

import { useRef, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function NewsletterSignup() {
  const url =
    "https://tristannettles.us6.list-manage.com/subscribe/post?u=3b4d67cc62297380c8173019b&id=b48a3744f0";

  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setFormStatus("sending");
    setMessage("");

    const formData = {
      EMAIL: document.getElementById("mce-EMAIL").value.trim(),
      FNAME: document.getElementById("mce-FNAME").value.trim(),
      COUNTRY: document.getElementById("mce-COUNTRY").value,
      "gdpr[440]": document.getElementById("gdpr_440").checked ? "Y" : "",
      b_3b4d67cc62297380c8173019b_b48a3744f0: "", // honeypot must be empty
    };

    // Use MailchimpSubscribe's subscribe function
    // But since we're using custom form, we trigger via the lib
    // Note: lib handles the actual POST
  };

  return (
    <section className="py-20 md:py-16 bg-[#1A1A1A] px-6 md:px-12 border-t border-[#B8860B]/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#B8860B] mb-6 tracking-wider">
          JOIN THE LEGION
        </h2>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          Subscribe for release alerts, exclusive Bronze Age lore, early
          chapters, and updates on Tristan Nettles&apos; epic tales.
        </p>

        <div className="bg-[#0F0F0F] border border-[#B8860B]/30 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl shadow-black/40">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message: mcMessage }) => {
              // Sync status from lib to local state
              if (status !== formStatus) {
                setFormStatus(status);
                if (status === "success")
                  setMessage("✓ Subscribed! Welcome to the legion.");
                if (status === "error")
                  setMessage(
                    mcMessage || "Subscription failed. Please try again.",
                  );
              }

              return (
                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!formRef.current.checkValidity()) {
                      formRef.current.reportValidity();
                      return;
                    }

                    const formData = {
                      EMAIL: document.getElementById("mce-EMAIL")?.value || "",
                      FNAME: document.getElementById("mce-FNAME")?.value || "",
                      COUNTRY:
                        document.getElementById("mce-COUNTRY")?.value || "",
                      "gdpr[440]": document.getElementById("gdpr_440")?.checked
                        ? "Y"
                        : "",
                      b_3b4d67cc62297380c8173019b_b48a3744f0: "",
                    };

                    subscribe(formData);
                  }}
                  className="space-y-6"
                >
                  {/* Status Messages */}
                  {formStatus === "sending" && (
                    <div className="text-[#B8860B] text-center font-medium">
                      Sending your oath...
                    </div>
                  )}
                  {formStatus === "error" && (
                    <div
                      className="text-red-400 text-center"
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  )}
                  {formStatus === "success" && (
                    <div className="text-green-400 text-center font-bold text-lg">
                      {message}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="mce-EMAIL"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Email Address <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="mce-EMAIL"
                      name="EMAIL"
                      required
                      className="w-full px-5 py-4 bg-black border border-[#B8860B]/50 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/30 transition-all"
                      placeholder="warrior@bronzeage.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mce-FNAME"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="mce-FNAME"
                      name="FNAME"
                      className="w-full px-5 py-4 bg-black border border-[#B8860B]/50 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/30 transition-all"
                      placeholder="Pan Shepherd"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mce-COUNTRY"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Country
                    </label>
                    <select
                      id="mce-COUNTRY"
                      name="COUNTRY"
                      className="w-full px-5 py-4 bg-black border border-[#B8860B]/50 rounded-lg text-white focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/30 transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* GDPR Consent */}
                  <div className="space-y-3 pt-4 border-t border-[#B8860B]/20">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        id="gdpr_440"
                        name="gdpr[440]"
                        value="Y"
                        required
                        className="mt-1.5 h-5 w-5 rounded border-[#B8860B]/50 bg-black text-[#B8860B] focus:ring-[#B8860B]/30"
                      />
                      <span className="text-sm text-white/80">
                        I consent to receiving emails with book teasers, release
                        news, exclusive content, and updates from Tristan
                        Nettles (you can unsubscribe anytime).
                      </span>
                    </label>

                    <p className="text-xs text-white/60">
                      We respect your privacy. Data processed via Mailchimp.{" "}
                      <a
                        href="https://mailchimp.com/legal/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#B8860B] hover:underline"
                      >
                        Learn more
                      </a>
                    </p>
                  </div>

                  {/* Honeypot – hidden */}
                  <div className="hidden">
                    <input
                      type="text"
                      name="b_3b4d67cc62297380c8173019b_b48a3744f0"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full py-4 bg-[#B8860B] hover:bg-amber-600 text-black font-bold text-lg rounded-full transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "sending" ? "Pledging..." : "SUBSCRIBE"}
                  </button>
                </form>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}

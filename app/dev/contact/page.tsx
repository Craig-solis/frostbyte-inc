"use client";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Auto-hide success/error messages after 10 seconds
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 10000); // 10 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount or status change
    }
  }, [submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email via API route using Nodemailer
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      const result = await response.json();
      console.log("Email sent successfully:", result.messageId);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full h-full flex-1 px-6 py-12">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            <span className="text-[var(--text-active)] text-glow-active">
              Contact
            </span>{" "}
            Me
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how I can help
            bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
                Get In Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[var(--text-active)] rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">@</span>
                  </div>
                  <div>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Email
                    </p>
                    <p className="text-[var(--text-primary)]">
                      craig.solis@frostbyte-inc.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[var(--text-active)] rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">📍</span>
                  </div>
                  <div>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Location
                    </p>
                    <p className="text-[var(--text-primary)]">
                      Available Worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[var(--text-active)] rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">⏰</span>
                  </div>
                  <div>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Response Time
                    </p>
                    <p className="text-[var(--text-primary)]">
                      Within 48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border border-[var(--greyed)] rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-[var(--text-active)]">
                What to expect:
              </h3>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li>• Quick response within 48 hours</li>
                <li>• Project consultation</li>
                <li>• Detailed project proposal</li>
                <li>• Transparent pricing</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--dark-bkgd)] border border-[var(--greyed)] rounded-lg text-[var(--text-primary)] placeholder-[var(--greyed)] focus:border-[var(--text-active)] focus:outline-none focus:ring-1 focus:ring-[var(--text-active)] transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--dark-bkgd)] border border-[var(--greyed)] rounded-lg text-[var(--text-primary)] placeholder-[var(--greyed)] focus:border-[var(--text-active)] focus:outline-none focus:ring-1 focus:ring-[var(--text-active)] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--dark-bkgd)] border border-[var(--greyed)] rounded-lg text-[var(--text-primary)] placeholder-[var(--greyed)] focus:border-[var(--text-active)] focus:outline-none focus:ring-1 focus:ring-[var(--text-active)] transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--dark-bkgd)] border border-[var(--greyed)] rounded-lg text-[var(--text-primary)] placeholder-[var(--greyed)] focus:border-[var(--text-active)] focus:outline-none focus:ring-1 focus:ring-[var(--text-active)] transition-colors resize-vertical"
                  placeholder="Tell me about your project, timeline, budget, or any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--text-active)] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[var(--text-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/20 border border-green-500 rounded-lg">
                  <p className="text-green-400">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg">
                  <p className="text-red-400">
                    Failed to send message. Please try again or email me
                    directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

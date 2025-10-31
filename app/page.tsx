import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Nav */}
      <header className="border-b border-[var(--greyed)] bg-[var(--dark-bkgd)]">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/Light_Logo_Full.png"
                alt="FrostByte Inc Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-[var(--text-primary)] hover:text-[var(--text-active)] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[var(--text-primary)] hover:text-[var(--text-active)] transition-colors"
              >
                About
              </a>
              <Link
                href="/dev"
                className="bg-[var(--text-active)] text-black px-4 py-2 rounded-lg hover:bg-[var(--text-secondary)] transition-colors"
              >
                Development Portfolio
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">FrostByte</span>
            <span className="text-[var(--text-active)] text-glow-active">
              {" "}
              Inc.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
            Professional Web Development & Digital Solutions
          </p>
          <p className="text-lg text-[var(--greyed)] mb-12 max-w-2xl mx-auto">
            We create cutting-edge web applications, custom software solutions,
            and provide digital transformation consulting for businesses of all
            sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dev"
              className="bg-[var(--text-active)] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--text-secondary)] transition-colors"
            >
              View Our Work
            </Link>
            <a
              href="#contact"
              className="border border-[var(--text-active)] text-[var(--text-active)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--text-active)] hover:text-black transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-[var(--dark-bkgd)]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-[var(--text-primary)]">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-[var(--greyed)] rounded-lg hover:border-[var(--text-active)] transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[var(--text-active)]">
                  Web Development
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Custom web applications built with modern technologies like
                  React, Next.js, and TypeScript.
                </p>
              </div>
              <div className="p-6 border border-[var(--greyed)] rounded-lg hover:border-[var(--text-active)] transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[var(--text-active)]">
                  Software Solutions
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Tailored software development to streamline your business
                  processes and improve efficiency.
                </p>
              </div>
              <div className="p-6 border border-[var(--greyed)] rounded-lg hover:border-[var(--text-active)] transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[var(--text-active)]">
                  Digital Consulting
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Strategic guidance for digital transformation and technology
                  adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-[var(--text-primary)]">
              About FrostByte Inc.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
              We are a professional web development company specializing in
              creating innovative digital solutions. Our team combines technical
              expertise with creative design to deliver exceptional results.
            </p>
            <Link
              href="/dev"
              className="inline-block bg-[var(--text-active)] text-black px-6 py-3 rounded-lg hover:bg-[var(--text-secondary)] transition-colors"
            >
              Explore Our Development Portfolio
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[var(--dark-bkgd)]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-[var(--text-primary)]">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Contact us today to discuss your project and see how we can help
              bring your vision to life.
            </p>
            <Link
              href="/dev/contact"
              className="inline-block bg-[var(--text-active)] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--text-secondary)] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--greyed)] py-8 bg-[var(--dark-bkgd)]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[var(--greyed)]">
            &copy; {new Date().getFullYear()} FrostByte Inc. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

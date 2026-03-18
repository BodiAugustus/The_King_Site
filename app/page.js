"use client";

import { useState } from "react";
import Image from "next/image";
import NewsletterSignup from "./components/NewsletterSignup";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-bg h-screen flex items-center justify-center relative ">
        {/* Book Cover Overlay - centered */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl ">
          {/* <Image
            src="/cover.jpg"
            alt="The King - A Bronze Age Tale II"
            fill
            className="object-fit"
            priority
          /> */}

          <h1 className="text-6xl md:text-7xl font-bold tracking-wider text-[#B8860B] mb-2">
            THE KING
          </h1>
          <p className="text-3xl md:text-4xl text-white/90 font-light tracking-widest mb-8">
            A BRONZE AGE TALE II
          </p>

          <a
            href="https://www.simonandschuster.com/books/The-King/Tristan-Nettles/A-Bronze-Age-Tale/9781592117673"
            target="_blank"
            className="bg-[#B8860B] hover:bg-amber-600 text-black font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 shadow-2xl inline-block"
          >
            PRE-ORDER NOW
          </a>

          <p className="mt-6 text-sm text-white/70">
            Available September 2026 • Histria Books
          </p>
        </div>

        {/* Scroll prompt */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest flex flex-col items-center">
          SCROLL TO DISCOVER
          <div className="w-px h-12 bg-white/30 mt-2"></div>
        </div>
      </section>

      <section className="py-16 md:py-16 bg-[#0F0F0F] px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Optional heading if you want one */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#B8860B] text-center mb-8 md:mb-6 tracking-wide">
            THE STORY
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
            {/* Left: Book cover (centered on mobile, left-aligned on desktop) */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4.5] md:aspect-[2/3] rounded-xl overflow-hidden border-4 border-[#B8860B]/30 shadow-2xl shadow-black/60">
                <Image
                  src="/cover.jpg" // ← your book cover path
                  alt="The King - A Bronze Age Tale II"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>

            {/* Right: Scrollable text container */}
            <div className="w-full lg:w-2/3">
              <div
                className="
          bg-[#1A1A1A] border border-[#B8860B]/20 rounded-xl 
          p-6 sm:p-8 md:p-8 
          max-h-[65vh] sm:max-h-[70vh] lg:max-h-[85vh] 
          overflow-y-auto 
          scrollbar-thin scrollbar-thumb-[#B8860B]/60 scrollbar-track-[#0F0F0F]
          prose prose-invert prose-lg leading-relaxed text-gray-200
        "
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-6 tracking-wide">
                  Synopsis
                </h3>

                <p className="mb-6">
                  The Bronze Age saga continues in this second volume where
                  love, vengeance, and destiny collide.
                </p>

                <p className="mb-6">
                  In a brutal world shaped by bronze and blood, Pan Shepherd
                  returns—no longer a slave, but a man driven by love,
                  vengeance, and an unrelenting determination to rescue Beocca,
                  who was abducted during their wedding by a sadistic
                  prince-turned-king.
                </p>

                <p className="mb-6">
                  Set against the sweeping backdrop of a collapsing kingdom and
                  a rising warlord, <em>The King – A Bronze Age Tale</em>{" "}
                  continues the saga of the shepherd destined to become a king.
                  As better-trained and better-equipped enemy armies close in,
                  Pan must navigate overwhelming odds, betrayal, and court
                  intrigue—not only to survive, but to reclaim the woman he
                  loves.
                </p>

                <p className="mb-6">
                  Rich in historical detail, political intrigue, and haunting
                  emotion, this epic sequel cements Tristan Nettles’ place as a
                  rising voice in historical fiction. <em>The King</em> is a
                  powerful tale of war, leadership, and love—where loyalty
                  endures, and nothing is more sacred than the bonds we fight to
                  protect.
                </p>

                <p className="italic text-[#B8860B]/90 mt-8 mb-8">
                  March into a kingdom on the brink—and discover how far one man
                  will go for love and honor.
                </p>
                <div className=" text-center">
                  <a
                    href="https://www.simonandschuster.com/books/The-King/Tristan-Nettles/A-Bronze-Age-Tale/9781592117673"
                    target="_blank"
                    className="bg-[#B8860B] hover:bg-amber-600 text-black font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 shadow-2xl inline-block"
                  >
                    PRE-ORDER NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="py-20 bg-[#0F0F0F] px-6 border-t border-b border-[#B8860B]/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#B8860B] mb-16">
            AT A GLANCE
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-[#B8860B] text-6xl mb-3">📖</div>
              <p className="font-bold text-2xl">Epic Historical Fiction</p>
              <p className="text-white/70 mt-2">
                Bronze Age saga of power &amp; destiny
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#B8860B] text-6xl mb-3">📄</div>
              <p className="font-bold text-2xl">503 pages</p>
              <p className="text-white/70 mt-2">
                Richly detailed world-building
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#B8860B] text-6xl mb-3">🔞</div>
              <p className="font-bold text-2xl">Mature (14+)</p>
              <p className="text-white/70 mt-2">
                Mature themes &amp; intense battle scenes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-[#1A1A1A] px-6">
        <div className="max-w-2xl mx-auto text-center">
          <NewsletterSignup />

          <div className="mt-2">
            <a
              href="https://www.tristannettles.com"
              target="_blank"
              className="inline-block text-[#B8860B] hover:text-amber-500 text-xl underline"
            >
              Visit Tristan Nettles Author Site →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-[#B8860B]/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-8 mb-8 opacity-70">
            <span className="text-[#B8860B] font-bold tracking-widest">
              SIMON & SCHUSTER
            </span>
            <span className="text-white/50 text-2xl">•</span>
            <span className="text-[#B8860B] font-bold tracking-widest">
              HISTRIA BOOKS
            </span>
          </div>

          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Tristan Nettles • All Rights Reserved
          </p>
          <p className="text-white/40 text-xs mt-4">
            The Bronze Age was not peaceful.
            <br />
            It was a world of ambition, survival, and power.
          </p>
        </div>
      </footer>
    </>
  );
}

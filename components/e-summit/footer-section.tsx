import Image from "next/image";
import { type ReactNode } from "react";

const quickLinks = [
  { href: "#", text: "Eureka!" },
  { href: "#", text: "Eureka! GCC" },
  { href: "#", text: "Eureka! Junior" },
  { href: "#", text: "NEC" },
  { href: "#", text: "NEC Junior" },
  { href: "#", text: "iEntO" },
  { href: "#", text: "NextCo" },
  { href: "#", text: "Seedstars" },
  { href: "#", text: "FinCoF" },
  { href: "#", text: "illuminate" },
  { href: "#", text: "Campus Ambassador" },
];

const socialIcons = [
  {
    href: "https://www.linkedin.com/company/ecell-iitb/",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/linkedin-1-2.svg?",
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/ecell_iitb/",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/instagram-3.svg?",
    alt: "Instagram",
  },
  {
    href: "https://twitter.com/ecell_iitb",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/twitter-x-4.svg?",
    alt: "Twitter/X",
  },
  {
    href: "https://www.youtube.com/c/ECellIITBombay",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/youtube-5.svg?",
    alt: "YouTube",
  },
  {
    href: "https://www.facebook.com/ecell.iitb/",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/facebook-1-6.svg?",
    alt: "Facebook",
  },
];

const contactItems = [
  { title: "FOR QUERIES", email: "esummit@ecell.in" },
  { title: "FOR HOSPITALITY QUERIES", email: "hospitality@ecell.in" },
  { title: "FOR SPONSORSHIP OPPORTUNITIES", email: "marketing@ecell.in" },
  { title: "FOR SPEAKING OPPORTUNITIES", email: "speaking@ecell.in" },
  { title: "FOR ASSOCIATION OPPORTUNITIES", email: "associate@ecell.in" },
];

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-white/75">
    {children}
  </h4>
);

export default function FooterSection() {
  return (
    <footer className="bg-black text-white">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/icons/logo-1.png?"
                alt="E-Cell IIIT Allahabad Logo"
                width={64}
                height={64}
                className="h-14 w-14"
              />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  THE ENTREPRENEURSHIP CELL
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  IIIT Allahabad
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.55em] text-[#B1F5FF]">
              CREATING JOB CREATORS
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              E-Cell IIIT Allahabad is Asia’s largest entrepreneurship promoting student body.
              We build the startup ecosystem on both sides of the wall.
            </p>
          </div>

          <div>
            <SectionHeading>Quick Links</SectionHeading>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#B1F5FF]"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <SectionHeading>Reach Us</SectionHeading>
              <p className="text-sm leading-relaxed text-white/80">
                E-Cell Office,
                <br /> Student Activity Centre (SAC),
                <br /> IIIT Allahabad, Powai,
                <br /> Mumbai, India
              </p>
            </div>
            <div className="space-y-4">
              <SectionHeading>Follow Us</SectionHeading>
              <div className="flex gap-4">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.alt}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:border-[#B1F5FF] hover:bg-white/20"
                  >
                    <span className="absolute inset-0 rounded-full border border-white/10" />
                    <Image src={icon.src} alt={icon.alt} width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionHeading>Contact Us</SectionHeading>
            <div className="mt-6 space-y-5 text-sm">
              {contactItems.map((item) => (
                <div key={item.email}>
                  <p className="text-xs uppercase tracking-[0.38em] text-white/55">
                    {item.title}
                  </p>
                  <a
                    href={`mailto:${item.email}`}
                    className="font-medium text-white transition hover:text-[#B1F5FF]"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 py-6 text-xs text-white/70 md:flex-row">
          <p>© 2025 E-Cell, IIIT Allahabad. All rights reserved.</p>
          <p className="tracking-[0.45em] uppercase text-white/50">
            Building the future of entrepreneurship
          </p>
        </div>
      </div>
    </footer>
  );
}
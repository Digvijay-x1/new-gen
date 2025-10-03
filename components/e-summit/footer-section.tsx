import Image from "next/image";
import { type ReactNode } from "react";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  type LucideIcon,
} from "lucide-react";

type SocialIcon = {
  href: string;
  label: string;
  Icon: LucideIcon;
  color: string;
};

const socialIcons: SocialIcon[] = [
  {
    href: "https://www.linkedin.com/company/ecell-iiit-allahabad/",
    label: "LinkedIn",
    Icon: Linkedin,
    color: "#0A66C2",
  },
  {
    href: "https://www.instagram.com/ecell_iiita/",
    label: "Instagram",
    Icon: Instagram,
    color: "#E4405F",
  },
  {
    href: "https://www.youtube.com/channel/UCYOhhILSgHt03bjj7n4g9DA",
    label: "YouTube",
    Icon: Youtube,
    color: "#FF0000",
  },
  {
    href: "https://www.facebook.com/p/E-Cell-IIIT-Allahabad-100063982418300/",
    label: "Facebook",
    Icon: Facebook,
    color: "#1877F2",
  },
];

const contactItems = [{ title: "FOR QUERIES", email: "esummit@ecell.in" }];

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
    {children}
  </h4>
);

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer id="footer-e-summit" className="text-white bg-black">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="px-6 py-20 mx-auto max-w-7xl md:px-12 lg:px-16">
        <div className="grid gap-16 md:grid-cols-3 lg:grid-cols-3">
          <div className="pr-4 space-y-8">
            <div className="flex items-center gap-4">
              <Image
                src="/logo_main.png"
                alt="E-Cell IIIT Allahabad Logo"
                width={150}
                height={64}
              />
              {/* <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  THE ENTREPRENEURSHIP CELL
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  IIIT Allahabad
                </p>
              </div> */}
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.55em] text-primary">
              CREATING JOB CREATORS
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              E-Cell IIIT Allahabad is Asia’s largest entrepreneurship promoting
              student body. We build the startup ecosystem on both sides of the
              wall.
            </p>
          </div>

          <div className="px-4 space-y-12">
            <div className="space-y-6">
              <SectionHeading>Reach Us</SectionHeading>
              <div>
                <p className="text-base font-light leading-relaxed text-white/70">
                  E-Cell Office,
                  <br /> Student Activity Centre (SAC),
                  <br /> IIIT Allahabad, Prayagraj
                  <br /> Uttar Pradesh, India
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeading>Follow Us</SectionHeading>
              <div className="flex gap-3">
                {socialIcons.map(({ href, label, Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 transition-all duration-300 hover:border-[#B1F5FF] hover:bg-white/10 hover:scale-110 hover:shadow-lg"
                    aria-label={`Follow us on ${label}`}
                  >
                    <span className="absolute inset-0 border rounded-xl border-white/10 group-hover:border-[#B1F5FF]/30 transition-colors duration-300" />
                    <Icon
                      className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                      style={{ color }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pl-4">
            <div className="space-y-6">
              <SectionHeading>Contact Us</SectionHeading>
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div
                    key={item.email}
                  >
                    <p className="text-xs uppercase tracking-[0.38em] text-white/70 mb-3 font-medium">
                      {item.title}
                    </p>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-lg font-medium text-white transition-colors duration-300 hover:text-[#B1F5FF] block"
                    >
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 py-8 mt-20 text-sm border-t border-white/20 text-white/70 md:flex-row">
          <p className="font-light">
            © 2025 E-Cell, IIIT Allahabad. All rights reserved.
          </p>
          <p className="tracking-[0.25em] uppercase text-white/70 text-sm font-medium">
            Building the future of entrepreneurship
          </p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed p-3 transition-all duration-300 border-2 border-white/50 bottom-8 right-12 group rounded-xl bg-primary/80 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-black duration-300" />
      </button>
    </footer>
  );
}

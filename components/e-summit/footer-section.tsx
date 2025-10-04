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

const contactItems = [{ email: "ecell@iiita.ac.in" }];

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h4 className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
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
          <div className="pr-4 space-y-6">
            <Image
              src="/logo_main.png"
              alt="E-Cell IIIT Allahabad Logo"
              width={150}
              height={64}
              className="h-auto w-auto max-w-[150px]"
              style={{ height: 'auto', width: 'auto', maxWidth: 150 }}
            />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              CREATING JOB CREATORS
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              The Entrepreneurship Cell (E-Cell) at IIIT Allahabad is a student-led initiative dedicated to nurturing entrepreneurial spirit on campus.
            </p>
          </div>

          <div className="space-y-12 md:px-4">
            <div className="space-y-4">
              <SectionHeading>Reach Us</SectionHeading>
              <div>
                <p className="text-base font-light leading-relaxed text-white">
                  New Gen Lab,
                  <br /> 2nd Floor, Computer Centre-2 (CC-2),
                  <br /> IIIT Allahabad, Prayagraj-211015,
                  <br /> Uttar Pradesh, India
                </p>
              </div>
            </div>
            <div className="space-y-4">
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

          <div className="md:pl-4">
            <div className="space-y-4">
              <SectionHeading>Contact Us</SectionHeading>
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <div
                    key={item.email}
                  >
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
            Dream | Dare | Disrupt
          </p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed z-20 p-3 transition-all duration-200 bg-blue-500/90 bottom-4 right-4 md:bottom-8 md:right-12 group rounded-xl hover:scale-110 hover:bg-blue-500 hover:border-2 hover:border-white"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
}

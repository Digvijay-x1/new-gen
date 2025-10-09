import Link from "next/link";
import Image from "next/image";

type SocialIcon = {
  href: string;
  label: string;
  Icon: string;
  color: string;
};

const socialIcons: SocialIcon[] = [
  {
    href: "https://www.facebook.com/p/E-Cell-IIIT-Allahabad-100063982418300/",
    label: "Facebook",
    Icon: "/facebook.svg",
    color: "#1877F2",
  },
  {
    href: "https://www.instagram.com/ecell_iiita/",
    label: "Instagram",
    Icon: "/instagram.svg",
    color: "#E4405F",
  },
  {
    href: "https://www.youtube.com/channel/UCYOhhILSgHt03bjj7n4g9DA",
    label: "YouTube",
    Icon: "/yt.svg",
    color: "#FF0000",
  },
  {
    href: "https://www.linkedin.com/company/ecell-iiit-allahabad/",
    label: "LinkedIn",
    Icon: "/linkedin.svg",
    color: "#0A66C2",
  },
];

const contactItems = [{ email: "ecell@iiita.ac.in" }];

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => (
    <div className="space-y-8">
      <h4 className="mt-4 text-base font-bold text-gray-300">
        Connect with us on social Media
      </h4>
      <div className="flex justify-center gap-3">
        {socialIcons.map(({ href, label, Icon, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center w-12 h-12 transition-all duration-300 bg-transparent group rounded-xl hover:scale-110"
            aria-label={`Follow us on ${label}`}
          >
            {/* <Icon
              className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
              style={{ color: "white" }}
            /> */}
            <Image src={Icon} alt="icon" width={40} height={40} />
          </a>
        ))}
      </div>
    </div>
  );

  const renderFooterContent = (): React.ReactNode => (
    <div className="grid w-full grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:gap-12 max-w-7xl">
      {/* Left Section: Logo and Social Media */}
      <div className="flex flex-col items-center space-y-6 md:col-span-2 lg:col-span-1">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/logo_main.png"
            alt="Logo"
            width={160}
            height={100}
            className="h-auto w-auto max-w-[160px] filter brightness-110"
          />
        </div>
        {renderSocialIcons()}
      </div>

      {/* Useful Links */}
      <div className="text-center md:text-left">
        <h3 className="pb-2 mb-4 text-xl font-semibold text-white border-b border-gray-600">
          Useful Links
        </h3>
        <div className="p-4 border rounded-lg bg-white/5 border-white/10 hover:cursor-pointer">
          <p className="text-base font-light leading-relaxed text-gray-300">
            <Link
              href="/e-summit"
              className="text-lg font-bold text-white transition-colors duration-300"
            >
              E-Summit
            </Link>
          </p>
        </div>
      </div>

      {/* Reach Us */}
      <div className="text-center md:text-left">
        <h3 className="pb-2 mb-4 text-xl font-semibold text-white border-b border-gray-600">
          Reach Us
        </h3>
        <div className="ounded-lg ">
          <p className="text-base font-light leading-relaxed text-white">
            New Gen Lab,
            <br /> 2nd Floor, <br /> Computer Centre-2 (CC-2),
            <br /> IIIT Allahabad, Prayagraj-211015,
            <br /> Uttar Pradesh, India
          </p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="text-center md:text-left">
        <h3 className="pb-2 mb-4 text-xl font-semibold text-white border-b border-gray-600">
          Contact Us
        </h3>
        <div className="space-y-4">
          {contactItems.map((item) => (
            <div
              key={item.email}
              className="transition-colors duration-300 rounded-lg"
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
  );

  return (
    <footer id="footer" className="relative flex flex-col items-stretch w-full bg-cover select-none home-footer">
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        width={1440}
      />
      <div className="w-full h-full bg-gradient-to-b from-transparent to-black/20">
        <div className="flex flex-col items-center justify-end h-full py-16 lg:py-20">
          {renderFooterContent()}

          <div className="w-full px-6 pt-8 mx-auto mt-12 border-t border-gray-600 max-w-7xl">
            <div className="text-center">
              <p className="text-lg font-light text-gray-300">
                Copyright © 2025 Ecell-IIIT Allahabad. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    <div className="flex flex-col items-center mt-4 space-y-2">
      <p className="mt-12 text-2xl font-semibold text-white">Connect with us on social media</p>
      <div className="flex mt-2 space-x-6">
        <a href="https://www.facebook.com/p/E-Cell-IIIT-Allahabad-100063982418300/" target="_blank" rel="noreferrer">
        <Image src="/facebook.svg" alt="Facebook" width={40} height={40} className="transition duration-300 hover:opacity-75" />
        </a>
        <a href="https://www.instagram.com/ecell_iiita/" target="_blank" rel="noreferrer">
          <Image src="/instagram.svg" alt="Facebook" width={40} height={40}  className="text-3xl text-white transition duration-300 md:text-4xl hover:text-pink-500" />
        </a>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer">
          <Image src="/twitter.svg" alt="Facebook" width={40} height={40}  className="text-3xl text-white transition duration-300 md:text-4xl hover:text-blue-400" />
        </a>
        <a href="http://linkedin.com/company/ecell-iiit-allahabad/posts/?feedView=all" target="_blank" rel="noreferrer">
          <Image src="/linkedin.svg" alt="Facebook" width={40} height={40}  className="text-3xl text-white transition duration-300 md:text-4xl hover:text-red-500" />
        </a>
      </div>
    </div>
  );

  const renderFooterContent = (): React.ReactNode => (
    <div className="grid w-full grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:gap-12 max-w-7xl">
      {/* Left Section: Logo and Social Media */}
      <div className="flex flex-col items-center max-w-sm py-2 text-center">
  <Image src="/logo_main.png" alt="Logo" width={160} height={100} className="h-auto w-auto max-w-[160px]" />
        {renderSocialIcons()}
      </div>

      
      <div>
        <h3 className="text-lg font-semibold text-[22px]">Useful Links</h3>
        <ul className="mt-3 space-y-2 text-gray-400">
          <li><a href="#" className="text-[20px] hover:text-teal-300">Content</a></li>
          <li>
  <Link href="/e-summit" className="text-[20px] hover:text-teal-300">
    E-Summit
  </Link>
</li>

          <li><a href="#" className="text-[20px] hover:text-teal-300">How it Works</a></li>
          <li><a href="#" className="text-[20px] hover:text-teal-300">Create</a></li>
          <li><a href="#" className="text-[20px] hover:text-teal-300">Explore</a></li>
          <li><a href="#" className="text-[20px] hover:text-teal-300">Terms & Services</a></li>
        </ul>
      </div>

     
      <div>
        <h3 className="text-lg font-semibold text-[22px]">Community</h3>
        <ul className="mt-3 space-y-2 text-gray-400">
          <li><a href="#" className="text-[20px] hover:text-teal-300">Help Center</a></li>
          <li><a href="#" className="text-[20px] hover:text-teal-300">Partners</a></li>
          <li><a href="#" className="text-[20px] hover:text-teal-300">Suggestions</a></li>
          <li><a href="#" className="text-[20px] hover:text-teal-300">Blog</a></li>
          <li><a href="#" className="text-[20px] hover:text-teal-300">Newsletters</a></li>
        </ul>
      </div>

  
      <div>
        <h3 className="text-lg font-semibold text-[22px]">Partner</h3>
        <ul className="mt-3 space-y-2 text-gray-400">
          <li><a href="#" className="text-[20px] hover:text-teal-300">Our Partner</a></li>
          <li><a href="#" className="text-[20px] hover:text-teal-300">Become a Partner</a></li>
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="relative flex flex-col items-stretch w-full bg-cover select-none home-footer">
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        width={1440}
      />
      <div className="w-full h-full">
        <div className="flex flex-col items-center justify-end h-full py-10 section-container">
      
          {renderFooterContent()}

         
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-[18px] mt-4">
              Copyright © 2025 Ecell-IIIT Allahabad. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { EMAIL, MENULINKS } from "../../constants";
import Image from "next/image";




const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com",
  gmail: "mailto:your-email@gmail.com",
};

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => (
    <div className="flex flex-col items-center space-y-2 mt-4">
      <p className="text-white text-2xl font-semibold mt-12">Connect with us on social media</p>
      <div className="flex space-x-6 mt-2">
        <a href="https://www.facebook.com/p/E-Cell-IIIT-Allahabad-100063982418300/" target="_blank" rel="noreferrer">
        <Image src="/facebook.svg" alt="Facebook" width={40} height={40} className="hover:opacity-75 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/ecell_iiita/" target="_blank" rel="noreferrer">
          <Image src="/instagram.svg" alt="Facebook" width={40} height={40}  className="text-3xl md:text-4xl text-white hover:text-pink-500 transition duration-300" />
        </a>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer">
          <Image src="/twitter.svg" alt="Facebook" width={40} height={40}  className="text-3xl md:text-4xl text-white hover:text-blue-400 transition duration-300" />
        </a>
        <a href="http://linkedin.com/company/ecell-iiit-allahabad/posts/?feedView=all" target="_blank" rel="noreferrer">
          <Image src="/linkedin.svg" alt="Facebook" width={40} height={40}  className="text-3xl md:text-4xl text-white hover:text-red-500 transition duration-300" />
        </a>
      </div>
    </div>
  );

  const renderFooterContent = (): React.ReactNode => (
    <div className="flex flex-wrap justify-between items-start gap-6 w-full px-6">
      {/* Left Section: Logo and Social Media */}
      <div className="max-w-sm flex flex-col items-center text-center py-2">
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
    <footer className="home-footer w-full relative select-none bg-cover flex flex-col items-stretch">
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end items-center py-10">
      
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

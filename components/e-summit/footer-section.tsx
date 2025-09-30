import Image from 'next/image';

export default function FooterSection() {
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
    { href: "https://www.linkedin.com/company/ecell-iitb/", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/linkedin-1-2.svg?", alt: "LinkedIn" },
    { href: "https://www.instagram.com/ecell_iitb/", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/instagram-3.svg?", alt: "Instagram" },
    { href: "https://twitter.com/ecell_iitb", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/twitter-x-4.svg?", alt: "Twitter/X" },
    { href: "https://www.youtube.com/c/ECellIITBombay", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/youtube-5.svg?", alt: "YouTube" },
    { href: "https://www.facebook.com/ecell.iitb/", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/facebook-1-6.svg?", alt: "Facebook" },
  ];

  const contactItems = [
    { title: "FOR QUERIES", email: "esummit@ecell.in" },
    { title: "FOR HOSPITALITY QUERIES", email: "hospitality@ecell.in" },
    { title: "FOR SPONSORSHIP OPPORTUNITIES", email: "marketing@ecell.in" },
    { title: "FOR SPEAKING OPPORTUNITIES", email: "speaking@ecell.in" },
    { title: "FOR ASSOCIATION OPPORTUNITIES", email: "associate@ecell.in" },
  ];

  return (
    <footer className="bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-8">
          
          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex items-center mb-5">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/icons/logo-1.png?" 
                alt="E-Cell IIT Bombay Logo" 
                width={64} 
                height={64}
                className="h-16 w-16 flex-shrink-0"
              />
              <div className="ml-4">
                <h3 className="font-display font-medium text-base tracking-wide uppercase">THE ENTREPRENEURSHIP CELL</h3>
                <p className="font-display font-medium text-sm uppercase">IIT BOMBAY</p>
              </div>
            </div>
            <p className="font-display font-bold text-base tracking-wider mb-4 uppercase">CREATING JOB CREATORS</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              E-Cell IIT Bombay is Asia's largest Entrepreneurship promoting student body and we build startup ecosystem on both the sides of the wall
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-sans font-bold text-white text-base mb-6 uppercase">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <div className="mb-10">
              <h4 className="font-sans font-bold text-white text-base mb-6 uppercase">REACH US</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                E-Cell Office, <br/>
                Student Activity Centre (SAC), <br/>
                IIT Bombay, Powai, <br/>
                Mumbai, India
              </p>
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-base mb-6 uppercase">FOLLOW US</h4>
              <div className="flex space-x-5">
                {socialIcons.map((icon) => (
                  <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-sans font-bold text-white text-base mb-6 uppercase">CONTACT US</h4>
            <div className="space-y-5">
              {contactItems.map((item) => (
                <div key={item.email}>
                  <p className="text-xs text-gray-400 font-sans uppercase tracking-wider mb-1">{item.title}</p>
                  <a href={`mailto:${item.email}`} className="text-primary hover:underline text-sm font-sans font-medium">
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 E-Cell, IIT Bombay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
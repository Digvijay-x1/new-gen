"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';



const XiaomiLogo = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg
    viewBox="0 0 32 32"
    role="img"
    aria-label="Xiaomi"
    {...props}
  >
    <path
      d="M26.615 26.667c-.234 0-.427-.193-.427-.427V5.761c0-.234.193-.427.427-.427h4.948c.24-.005.438.188.438.427V26.24c0 .24-.198.432-.438.427zm-8.297 0s-.396-.12-.396-.427V13.667c.052-1.651-1.281-3.016-2.938-3H6.734c-.536 0-.401.401-.401.401v15.172c0 .359-.401.427-.401.427H1.437C1.197 26.682.999 26.489.999 26.25V5.771c0-.24.198-.432.438-.427h17.151c3.13.021 5.656 2.563 5.667 5.693l.01 15.214c0 .234-.188.427-.427.427zM9.12 26.667c-.219 0-.401-.177-.401-.401v-12c0-.219.182-.401.401-.401h5.026c.219.01.385.188.385.401v12c0 .224-.177.401-.396.401z"
      fill="currentColor"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden font-display flex items-center justify-center p-4">
      {/* Decorative animated shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] left-[15%] w-12 h-12 bg-zinc-900/50 transform rotate-12 animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-[15%] right-[10%] w-16 h-16 bg-zinc-900/50 transform -rotate-45 animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute top-[15%] right-[25%] w-8 h-8 bg-zinc-900/50 transform rotate-45 animate-[spin_15s_linear_infinite]" />
        <div className="absolute bottom-[25%] left-[20%] w-20 h-20 bg-zinc-900/50 transform rotate-6 animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      {/* Floating PASSES Button */}
      <a href="#" className="absolute top-8 right-8 z-20 flex flex-col items-center justify-center p-2 w-[70px] h-[70px] bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-colors">
        <span className="text-lg leading-none">A</span>
        <Ticket className="w-5 h-5 my-0.5" />
        <span className="text-[10px] leading-none tracking-tighter">PASSES</span>
      </a>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="relative">
          {/* Sponsors */}
          <div className="absolute -top-16 left-60 transform -translate-x-1/4 md:-translate-x-1/2 lg:-translate-x-3/4">
            <div className="bg-white text-black py-2 px-4 rounded-lg shadow-lg">
              
              <div className="font-bold text-lg font-display" style={{color: '#0033A1' }}>
                TATA <span className="text-gray-400 font-light">|</span> GROUP
              </div>
              <p className="text-[10px] tracking-wider text-center text-gray-600 mb-1 font-body">Presents</p>
            </div>
          </div>
          
          {/* <div className="absolute top-199 -right-8 md:-right-16 text-center">
            <p className="text-sm text-gray-400 mb-2 font-body">In Association With</p>
            <div className="flex items-center justify-center gap-2">
              <XiaomiLogo className="h-10 w-10 text-[#FF6900]" />
              <span className="font-semibold text-2xl font-display">Xiaomi</span>
            </div>
          </div> */}

          {/* Central Block: Logo + Title + Dates */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-12 pt-16 pb-8">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/logo-element-1.svg?"
                alt="E-Summit Maze Logo"
                width={160}
                height={160}
                className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 shrink-0"
              />
              
              <div className="flex items-end gap-x-4 sm:gap-x-6 md:gap-x-8">
                <div className="text-left shrink">
                  <p className="text-base md:text-xl font-medium tracking-widest text-gray-300 font-body">IIIT  ALLAHABAD&apos;S 1<sup>ST</sup></p>
                  <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] font-extrabold tracking-[-0.05em] leading-none whitespace-nowrap">
                    <span className="text-white">E-</span><span className="text-primary">SUMMIT</span>
                  </h1>
                  <h3 className="text-lg md:text_2xl font-light tracking-[0.2em] md:tracking-[0.3em] text_gray-200 mt-2 whitespace-nowrap">
                    DECIPHERING THE LABYRINTH
                  </h3>
                </div>
                
                <div className="pb-3 md:pb-6 lg:pb-8 shrink-0">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider whitespace-nowrap">
                    11<sup>th</sup> - 12<sup>th</sup> OCT
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
        {/* Yellow lines */}
        <div className="absolute -bottom-24 left-1/4 w-[30%] h-1 bg-primary/20 transform -skew-y-[30deg] blur-sm"></div>
        <div className="absolute -bottom-16 left-[30%] w-[20%] h-0.5 bg-primary/40 transform -skew-y-[30deg]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
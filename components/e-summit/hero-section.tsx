"use client";

import Image from 'next/image';
import { Ticket } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-screen p-4 overflow-hidden text-white bg-black font-display">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="relative">
          {/* Sponsors */}
          <div className="absolute transform -top-16 left-60 -translate-x-1/4 md:-translate-x-1/2 lg:-translate-x-3/4">
            <div className="px-4 py-2 text-black bg-white rounded-lg shadow-lg">
              
              <div className="text-lg font-bold font-display" style={{color: '#0033A1' }}>
                TATA <span className="font-light text-gray-400">|</span> GROUP
              </div>
              <p className="text-[10px] tracking-wider text-center text-gray-600 mb-1 font-body">Presents</p>
            </div>
          </div>
          
          {/* <div className="absolute text-center top-199 -right-8 md:-right-16">
            <p className="mb-2 text-sm text-gray-400 font-body">In Association With</p>
            <div className="flex items-center justify-center gap-2">
              <XiaomiLogo className="h-10 w-10 text-[#FF6900]" />
              <span className="text-2xl font-semibold font-display">Xiaomi</span>
            </div>
          </div> */}

          {/* Central Block: Logo + Title + Dates */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center pt-16 pb-8 gap-x-4 sm:gap-x-8 md:gap-x-12">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/logo-element-1.svg?"
                alt="E-Summit Maze Logo"
                width={160}
                height={160}
                className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 shrink-0"
              />
              
              <div className="flex items-end gap-x-4 sm:gap-x-6 md:gap-x-8">
                <div className="text-left shrink">
                  <p className="text-base font-medium tracking-widest text-gray-300 md:text-xl font-body">IIIT  ALLAHABAD&apos;S 1<sup>ST</sup></p>
                  <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] font-extrabold tracking-[-0.05em] leading-none whitespace-nowrap">
                    <span className="text-white">E-</span><span className="text-primary">SUMMIT</span>
                  </h1>
                  <h3 className="text-lg md:text_2xl font-light tracking-[0.2em] md:tracking-[0.3em] text_gray-200 mt-2 whitespace-nowrap">
                    DECIPHERING THE LABYRINTH
                  </h3>
                </div>
                
                <div className="pb-3 md:pb-6 lg:pb-8 shrink-0">
                  <p className="text-lg font-bold tracking-wider md:text-xl lg:text-2xl whitespace-nowrap">
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
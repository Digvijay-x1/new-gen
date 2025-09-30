"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';

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
        <span className="text-lg leading-none">B</span>
        <Ticket className="w-5 h-5 my-0.5" />
        <span className="text-[10px] leading-none tracking-tighter">PASSES</span>
      </a>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="relative">
          {/* Sponsors */}
          <div className="absolute -top-16 left-0 transform -translate-x-1/4 md:-translate-x-1/2 lg:-translate-x-3/4">
            <div className="bg-white text-black py-2 px-4 rounded-lg shadow-lg">
              <p className="text-[10px] tracking-wider text-center text-gray-600 mb-1 font-body">Presents</p>
              <div className="font-bold text-lg font-display" style={{color: '#0033A1' }}>
                WESTBRIDGE <span className="text-gray-400 font-light">|</span> CAPITAL
              </div>
            </div>
          </div>
          
          <div className="absolute top-16 -right-8 md:-right-16 text-center">
            <p className="text-sm text-gray-400 mb-2 font-body">In Association With</p>
            <div className="flex items-center justify-center gap-2">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current text-white"><title>GitLab</title><path d="M23.955 13.587l-1.34-4.124L18.488.54l-3.342 10.28H8.851L5.51 0 .521 13.587H.025l11.977 7.37L23.975 13.588zM15.849 11.85H8.15l2.206-6.78 1.521 4.675 1.521-4.675z"/></svg>
              <span className="font-semibold text-2xl font-display">GitLab</span>
            </div>
          </div>

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
                  <p className="text-base md:text-xl font-medium tracking-widest text-gray-300 font-body">IIT BOMBAY'S 21<sup>ST</sup></p>
                  <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] font-extrabold tracking-[-0.05em] leading-none whitespace-nowrap">
                    <span className="text-white">E-S</span><span className="text-primary">UMMIT</span>
                  </h1>
                  <h3 className="text-lg md:text_2xl font-light tracking-[0.2em] md:tracking-[0.3em] text_gray-200 mt-2 whitespace-nowrap">
                    DECIPHERING THE LABYRINTH
                  </h3>
                </div>
                
                <div className="pb-3 md:pb-6 lg:pb-8 shrink-0">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider whitespace-nowrap">
                    11<sup>th</sup> - 12<sup>th</sup> DEC
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center items-center gap-4 md:gap-6 mt-8 md:mt-12">
              <Button variant="outline" className="bg-black/20 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-white font-body tracking-wider uppercase text-sm px-8 py-5 md:px-10 md:py-6 rounded-md">
                Register
              </Button>
              <Button variant="outline" className="bg-black/20 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-white font-body tracking-wider uppercase text-sm px-8 py-5 md:px-10 md:py-6 rounded-md">
                Login
              </Button>
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
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ClientLogos() {
  const [glowActive, setGlowActive] = useState(false);

  // Make all logos glow and not glow together in a cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowActive(prev => !prev);
    }, 2000); // Toggle glow every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  const logos = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
      type: "image"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
      type: "image"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
      type: "image"
    },
    {
      name: "Apple",
      type: "svg",
      svg: (
        <svg viewBox="0 0 512 512" className="h-8 md:h-10 w-auto fill-current">
          <path d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 19.62-93.6 56.32-39.47 63.27-10.14 157 28.75 208.6 18.84 26.61 44.01 56.45 75.89 56.45 30.73 0 38.88-19.35 74.66-19.35 35.78 0 43.18 19.35 73.66 19.35 31.88 0 57.05-31.37 75.89-58a252.737 252.737 0 0025.77-51.82C417.92 319.59 382.43 136.87 349.13 136.86zM242.4 24.62C249.4 16.49 261.59 10 277 10c1.63 29.44-8.42 57.75-24.65 75.24C246.71 90.68 233.77 98 220.49 98c-1.63-31.06 12.14-58.86 21.91-73.38z"/>
        </svg>
      )
    },
    {
      name: "Meta",
      type: "svg",
      svg: (
        <svg viewBox="0 0 240 240" className="h-8 md:h-10 w-auto fill-current">
          <path d="M166.763 52.361h-39.92v67.281h-37.439v-67.281H50.223c-16.198.081-16.198.104-16.198 15.341l-.034 121.898.034 35.857c.081 5.081 2.56 9.963 7.481 12.403 2.264 1.062 4.977 1.667 7.721 1.667 8.157 0 152.717 0 152.717 0 4.603 0 8.977-1.667 12.403-4.798 3.426-3.15 5.535-7.481 5.697-12.084v-45.517-125.406h-53.281v0zm-12.981 171.243H83.96c-5.718 0-10.358-4.641-10.358-10.339l.012-73.94 18.988 15.697c3.069 2.613 6.702 3.884 10.331 3.884 3.65 0 7.267-1.27 10.374-3.884l18.996-15.697-.012 73.94c.01 5.698-4.629 10.339-10.342 10.339z"/>
        </svg>
      )
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png",
      type: "image"
    },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`
            transition-all duration-1000 ease-in-out
            ${glowActive ? 
              "grayscale-0 opacity-100 brightness-110 contrast-125 scale-105" : 
              "grayscale opacity-70"
            }
            hover:grayscale-0 hover:opacity-100 hover:brightness-110 hover:contrast-125 hover:scale-110
          `}
        >
          <div className="relative">
            {logo.type === "image" ? (
              <Image
                src={logo.logo}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            ) : (
              logo.svg
            )}
            <div 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-lg blur-md
                ${glowActive ? "opacity-100" : "opacity-0"}
                hover:opacity-100
              `}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}


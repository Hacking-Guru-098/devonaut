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
      type: "image",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png"
    },
    {
      name: "Meta",
      type: "image",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png"
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


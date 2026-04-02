"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoSize = "sm" | "md" | "lg" | "xl"

interface LogoProps {
  variant?: "horizontal" | "stacked"
  color?: "color" | "white"
  size?: LogoSize
  className?: string
  linkTo?: string | null
  showText?: boolean
}

// Sizes based on brand guidelines:
// Navbar: ~40px desktop, ~32px mobile (horizontal)
// Hero: ~60-80px (stacked)
// Footer: ~36px (horizontal)
// Minimum: 10mm × 4.5mm horizontal, 5.5mm × 7.5mm stacked

const sizeConfig = {
  horizontal: {
    sm: { icon: 32, text: "text-base", subtext: "text-[8px]" },      // Mobile navbar ~32px
    md: { icon: 40, text: "text-xl", subtext: "text-[10px]" },       // Desktop navbar ~40px
    lg: { icon: 48, text: "text-2xl", subtext: "text-xs" },          // Large displays
    xl: { icon: 56, text: "text-3xl", subtext: "text-sm" },          // Hero/banners
  },
  stacked: {
    sm: { icon: 40, text: "text-base", subtext: "text-[8px]" },      // Minimum size
    md: { icon: 56, text: "text-xl", subtext: "text-[10px]" },       // Standard
    lg: { icon: 72, text: "text-2xl", subtext: "text-xs" },          // Hero ~60-80px
    xl: { icon: 88, text: "text-3xl", subtext: "text-sm" },          // Large hero
  },
}

export function Logo({ 
  variant = "horizontal", 
  color = "color",
  size = "md",
  className,
  linkTo = "/",
  showText = true
}: LogoProps) {
  const config = sizeConfig[variant][size]
  
  const LogoContent = () => (
    <div 
      className={cn(
        "flex items-center gap-2 transition-opacity duration-300 hover:opacity-80",
        variant === "stacked" && "flex-col gap-1",
        className
      )}
    >
      {/* Logo Icon */}
      <div 
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: config.icon, height: config.icon }}
      >
        {/* Placeholder SVG - replace with actual logo image when available */}
        {/* To use real logo: uncomment Image and remove SVG
        <Image 
          src={color === "white" ? "/images/logo-icon-white.svg" : "/images/logo-icon.svg"}
          alt="A2F"
          width={config.icon}
          height={config.icon}
          className="object-contain"
          priority
        />
        */}
        
        {/* Temporary SVG placeholder matching brand colors */}
        <svg 
          viewBox="0 0 48 48" 
          className="w-full h-full"
          fill="none"
          aria-hidden="true"
        >
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id={`logoGradient-${color}-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color === "white" ? "#FFFFFF" : "#1B7FA6"} />
              <stop offset="50%" stopColor={color === "white" ? "#FFFFFF" : "#8B3F9E"} />
              <stop offset="100%" stopColor={color === "white" ? "#FFFFFF" : "#E8610A"} />
            </linearGradient>
          </defs>
          <circle 
            cx="24" 
            cy="24" 
            r="22" 
            stroke={`url(#logoGradient-${color}-${size})`}
            strokeWidth="2"
            fill="none"
          />
          {/* A2F text inside */}
          <text 
            x="24" 
            y="28" 
            textAnchor="middle" 
            fontSize="14" 
            fontWeight="bold"
            fill={color === "white" ? "#FFFFFF" : "#1A1F3C"}
            fontFamily="system-ui, sans-serif"
          >
            A2F
          </text>
        </svg>
      </div>

      {/* Logo Text - Horizontal variant */}
      {showText && variant === "horizontal" && (
        <div className={cn(
          "flex flex-col leading-none",
          color === "white" ? "text-white" : "text-foreground"
        )}>
          <span className={cn("font-bold tracking-tight", config.text)} style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>
            A2F
          </span>
          <span className={cn(
            "uppercase tracking-[0.2em] font-medium",
            config.subtext,
            color === "white" ? "text-white/80" : "text-muted-foreground"
          )}>
            Incentivos
          </span>
        </div>
      )}

      {/* Logo Text - Stacked variant */}
      {showText && variant === "stacked" && (
        <div className={cn(
          "flex flex-col items-center leading-none",
          color === "white" ? "text-white" : "text-foreground"
        )}>
          <span className={cn("font-bold tracking-tight", config.text)} style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>
            A2F
          </span>
          <span className={cn(
            "uppercase tracking-[0.15em] font-medium",
            config.subtext,
            color === "white" ? "text-white/80" : "text-muted-foreground"
          )}>
            Incentivos
          </span>
        </div>
      )}
    </div>
  )

  if (linkTo) {
    return (
      <Link href={linkTo} className="inline-flex">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}

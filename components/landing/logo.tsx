"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "horizontal" | "stacked"
  color?: "color" | "white"
  className?: string
  linkTo?: string
  showText?: boolean
}

export function Logo({ 
  variant = "horizontal", 
  color = "color",
  className,
  linkTo = "/",
  showText = true
}: LogoProps) {
  // Minimum sizes based on brand guidelines
  // Horizontal: 10mm × 4.5mm ≈ 38px × 17px (we use larger for web)
  // Stacked: 5.5mm × 7.5mm ≈ 21px × 28px (we use larger for web)
  
  const sizes = {
    horizontal: {
      width: 140,
      height: 40,
      minWidth: 100,
    },
    stacked: {
      width: 60,
      height: 70,
      minWidth: 44,
    }
  }

  const currentSize = sizes[variant]

  // Logo content - placeholder until real logo images are added
  // Replace src with actual logo paths: /images/logo-horizontal.svg, /images/logo-stacked.svg
  const LogoContent = () => (
    <div 
      className={cn(
        "flex items-center gap-2 transition-opacity duration-300 hover:opacity-80",
        variant === "stacked" && "flex-col gap-1",
        className
      )}
      style={{ minWidth: currentSize.minWidth }}
    >
      {/* Logo Icon */}
      <div className={cn(
        "relative flex items-center justify-center",
        variant === "horizontal" ? "w-10 h-10" : "w-12 h-12"
      )}>
        {/* Placeholder icon - replace with actual logo image */}
        {/* <Image 
          src={color === "white" ? "/images/logo-icon-white.svg" : "/images/logo-icon.svg"}
          alt="A2F"
          width={variant === "horizontal" ? 40 : 48}
          height={variant === "horizontal" ? 40 : 48}
          className="object-contain"
        /> */}
        
        {/* Temporary SVG placeholder matching brand colors */}
        <svg 
          viewBox="0 0 48 48" 
          className={cn(
            "w-full h-full",
            variant === "horizontal" ? "w-10 h-10" : "w-12 h-12"
          )}
          fill="none"
        >
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id={`logoGradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color === "white" ? "#FFFFFF" : "#1B7FA6"} />
              <stop offset="50%" stopColor={color === "white" ? "#FFFFFF" : "#8B3F9E"} />
              <stop offset="100%" stopColor={color === "white" ? "#FFFFFF" : "#E8610A"} />
            </linearGradient>
          </defs>
          <circle 
            cx="24" 
            cy="24" 
            r="22" 
            stroke={`url(#logoGradient-${color})`}
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

      {/* Logo Text */}
      {showText && variant === "horizontal" && (
        <div className={cn(
          "flex flex-col leading-none",
          color === "white" ? "text-white" : "text-foreground"
        )}>
          <span className="font-serif text-xl font-semibold tracking-tight">
            A2F
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.2em] font-medium",
            color === "white" ? "text-white/80" : "text-muted-foreground"
          )}>
            Incentivos
          </span>
        </div>
      )}

      {showText && variant === "stacked" && (
        <div className={cn(
          "flex flex-col items-center leading-none",
          color === "white" ? "text-white" : "text-foreground"
        )}>
          <span className="font-serif text-lg font-semibold tracking-tight">
            A2F
          </span>
          <span className={cn(
            "text-[8px] uppercase tracking-[0.15em] font-medium",
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

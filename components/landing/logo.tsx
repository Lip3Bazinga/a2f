"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoSize = "sm" | "md" | "lg" | "xl"

interface LogoProps {
  variant?: "horizontal" | "stacked"
  color?: "color" | "white" | "white-outline"
  size?: LogoSize
  className?: string
  linkTo?: string | null
  showText?: boolean
}

// Horizontal PNG dimensions (width × height), min 100×40px per brand guidelines
const horizontalSizes: Record<LogoSize, { width: number; height: number }> = {
  sm:  { width: 100, height: 40 },   // Mobile navbar / footer small
  md:  { width: 140, height: 56 },   // Desktop navbar
  lg:  { width: 200, height: 80 },   // Large displays / hero
  xl:  { width: 280, height: 112 },  // Extra large
}

// Stacked (icon-only) dimensions
const stackedSizes: Record<LogoSize, { width: number; height: number }> = {
  sm:  { width: 40,  height: 40  },
  md:  { width: 56,  height: 56  },
  lg:  { width: 80,  height: 80  },
  xl:  { width: 112, height: 112 },
}

// PNG file per color variant
const horizontalSrc: Record<"color" | "white" | "white-outline", string> = {
  color:          "/logo-color.png",
  white:          "/logo-white.png",
  "white-outline": "/logo-white-outline.png",
}

const stackedSrc: Record<"color" | "white" | "white-outline", string> = {
  color:          "/logo-icon-color.png",
  white:          "/logo-icon-color.png",   // use same icon; PNG has no transparency issue at this size
  "white-outline": "/logo-icon-color.png",
}

export function Logo({
  variant = "horizontal",
  color = "color",
  size = "md",
  className,
  linkTo = "/",
}: LogoProps) {
  const isHorizontal = variant === "horizontal"
  const dims = isHorizontal ? horizontalSizes[size] : stackedSizes[size]
  const src  = isHorizontal ? horizontalSrc[color]  : stackedSrc[color]

  const img = (
    <Image
      src={src}
      alt="A2F Incentivos"
      width={dims.width}
      height={dims.height}
      className={cn("object-contain", className)}
      style={{ minWidth: dims.width, minHeight: dims.height }}
      priority
    />
  )

  if (linkTo) {
    return (
      <Link href={linkTo} className="inline-flex transition-opacity duration-300 hover:opacity-80">
        {img}
      </Link>
    )
  }

  return <span className="inline-flex">{img}</span>
}

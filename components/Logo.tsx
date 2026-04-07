import Image from "next/image";

type LogoVariant = "color" | "white" | "white-outline" | "icon";
type LogoSize = "sm" | "md" | "lg" | "xl";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const sizes: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 100, height: 40 },
  md: { width: 140, height: 56 },
  lg: { width: 200, height: 80 },
  xl: { width: 280, height: 112 },
};

const sources: Record<LogoVariant, string> = {
  color: "/images/logo-color.png",
  white: "/images/logo-white.png",
  "white-outline": "/images/logo-white-outline.png",
  icon: "/images/logo-icon-color.png",
};

export default function Logo({
  variant = "color",
  size = "md",
  className = "",
}: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <Image
      src={sources[variant]}
      alt="A2F Incentivos"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  );
}
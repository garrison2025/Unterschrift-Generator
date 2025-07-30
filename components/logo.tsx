import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  className?: string
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }

  if (!showText) {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <Image
          src="/favicon-32x32.png"
          alt="Unterschrift Generator Logo"
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={sizeClasses[size]}>
        <Image
          src="/favicon-32x32.png"
          alt="Unterschrift Generator Logo"
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>
      <span className={`font-bold text-blue-600 ${textSizeClasses[size]}`}>Unterschrift Generator</span>
    </div>
  )
}

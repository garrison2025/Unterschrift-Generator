"use client"

import type React from "react"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  loadingText?: string
}

export const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ children, loading, loadingText, disabled, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="sr-only">{loadingText || "Wird geladen..."}</span>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
            {loadingText || "Laden..."}
          </>
        ) : (
          children
        )}
      </Button>
    )
  },
)

AccessibleButton.displayName = "AccessibleButton"

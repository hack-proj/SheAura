"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl text-primary">SheAura</span>
        </Link>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

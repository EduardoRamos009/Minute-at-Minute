"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Github, Loader } from "lucide-react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
    <form onSubmit={onSubmit}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Name
          </Label>
          <Input
            id="name"
            placeholder="name"
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            disabled={isLoading}
            name="name"
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            name="email"
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            placeholder="password"
            type="password"
            autoCapitalize="none"
            autoCorrect="off"
            disabled={isLoading}
            name="password"
          />
        </div>
        <Button disabled={isLoading}>
          {isLoading && (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          )}
          Register
        </Button>
      </div>
    </form>
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          ALREADY HAVE AN ACCOUNT? <b><a href="/login">Enter Now</a> </b>
        </span>
      </div>
    </div>
  </div>
  )
}
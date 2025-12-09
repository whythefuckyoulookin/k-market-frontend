'use client'

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AxeIcon, ExternalLinkIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const Header = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b fixed w-full bg-background z-40">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          <a href="https://flowbite.com" className="flex items-center">
            <AxeIcon className="mr-3 h-6 sm:h-9" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Link href="/auth/signin" className={buttonVariants({ variant: "secondary", className: "mr-2" })}>
              Log in
            </Link>
            <Link href="#" className={buttonVariants({ className: "mr-2" })}>
              Get started
            </Link>
            <Button
              className="ml-1 lg:hidden"
              size={'icon'}
              variant={'ghost'}
              onClick={() => setOpen(prev => !prev)}
            >
              <MenuIcon />
            </Button>
          </div>
          <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className={cn("flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 divide-y lg:divide-y-0 lg:flex!", !open && "hidden")}>
              <li>
                <Link
                  href="/"
                  className={cn(
                    "block py-2 pr-4 pl-3 rounded lg:p-0",
                    pathname === '/'
                      ? "lg:text-primary/70 bg-primary/70 lg:bg-transparent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground lg:hover:bg-transparent lg:hover:text-primary/70"
                  )}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={cn(
                    "block py-2 pr-4 pl-3 rounded lg:p-0",
                    pathname === '/company'
                      ? "lg:text-primary/70 bg-primary/70 lg:bg-transparent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground lg:hover:bg-transparent lg:hover:text-primary/70"
                  )}
                >
                  Новости
                </Link>
              </li>
              <li>
                <a
                  href="https://market.korzilla.ru"
                  className={cn(
                    "block py-2 pr-4 pl-3 rounded lg:p-0",
                    "text-muted-foreground hover:bg-muted hover:text-foreground lg:hover:bg-transparent lg:hover:text-primary/70",
                    "inline-flex items-center gap-2"
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Маркетплейс
                  <ExternalLinkIcon className="size-4" />
                </a>
              </li>
              <li>
                <Link
                  href="/team"
                  className={cn(
                    "block py-2 pr-4 pl-3 rounded lg:p-0",
                    pathname === '/team'
                      ? "lg:text-primary/70 bg-primary/70 lg:bg-transparent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground lg:hover:bg-transparent lg:hover:text-primary/70"
                  )}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={cn(
                    "block py-2 pr-4 pl-3 rounded lg:p-0",
                    pathname === '/contact'
                      ? "lg:text-primary/70 bg-primary/70 lg:bg-transparent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground lg:hover:bg-transparent lg:hover:text-primary/70"
                  )}
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className={cn(
                    "block py-2 pr-4 pl-3 rounded lg:p-0",
                    pathname === '/features'
                      ? "lg:text-primary/70 bg-primary/70 lg:bg-transparent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground lg:hover:bg-transparent lg:hover:text-primary/70"
                  )}
                >
                  Помощь
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
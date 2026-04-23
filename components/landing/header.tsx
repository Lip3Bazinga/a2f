"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const navLinks = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "glass-header-scrolled shadow-soft py-3" : "glass-header-top py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Horizontal version, ~40px desktop, ~32px mobile */}
          <div className="flex">
            <div className="hidden sm:block">
              <Logo
                variant="horizontal"
                color={isScrolled ? "color" : "white"}
                size="md"
                linkTo="/"
              />
            </div>
            <div className="sm:hidden">
              <Logo
                variant="horizontal"
                color={isScrolled ? "color" : "white"}
                size="sm"
                linkTo="/"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`text-md font-bold transition-colors duration-300 tracking-wide ${isScrolled
                  ? "text-foreground/70 hover:text-primary"
                  : "text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA button */}
          <a
            href="#contato"
            className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-glow-accent"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25 hover:border-white/50 backdrop-blur-sm"
            }`}
          >
            Fale Conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/70"
              }`}
            aria-label="Alternar menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 pb-4 bg-background rounded-xl shadow-soft"
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 py-2.5 border-b border-border last:border-0"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-3 w-full text-center px-5 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-all duration-300"
                >
                  Fale Conosco
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

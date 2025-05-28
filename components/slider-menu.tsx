"use client"

import { X, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SliderMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SliderMenu({ isOpen, onClose }: SliderMenuProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}

      {/* Slider Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[800px] bg-[#F9F7F2] z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-8">
          {/* Close Button */}
          <button onClick={onClose} className="w-[50px] h-[50px] flex items-center justify-center mb-16">
            <X className="w-6 h-6 text-[#28512A]" strokeWidth={2} />
          </button>

          {/* Menu Items */}
          <nav className="space-y-8">
            <Link href="/" className="flex items-center justify-between py-2 group" onClick={onClose}>
              <span className="text-2xl text-[#3F3529] font-normal">Accueil</span>
              <ChevronRight className="w-6 h-6 text-[#3F3529] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/location" className="flex items-center justify-between py-2 group" onClick={onClose}>
              <span className="text-2xl text-[#3F3529] font-normal">Location</span>
              <ChevronRight className="w-6 h-6 text-[#3F3529] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/buy" className="flex items-center justify-between py-2 group" onClick={onClose}>
              <span className="text-2xl text-[#3F3529] font-normal">Achat</span>
              <ChevronRight className="w-6 h-6 text-[#3F3529] group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

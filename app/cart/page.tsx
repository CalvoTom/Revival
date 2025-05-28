"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SliderMenu from "@/components/slider-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <SliderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <Link href="/">
              <button className="w-[50px] h-[50px] flex items-center justify-center">
                <X className="w-6 h-6 text-[#28512A]" strokeWidth={2} />
              </button>
            </Link>
          </div>

          <h1 className="text-5xl font-normal text-[#3F3529] mb-16">Votre panier (0)</h1>

          {/* Cart Item */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          </div>

          {/* Divider */}
          <div className="border-b border-[#3F3529]/20 mb-8"></div>

          {/* Checkout Button */}
          <Button className="w-full h-16 bg-[#3F3529] hover:bg-[#3F3529]/90 text-white text-xl font-bold rounded-[20px]">
            Procéder au paiement
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

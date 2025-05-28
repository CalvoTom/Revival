"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SliderMenu from "@/components/slider-menu"
import ProductCard from "@/components/product-card"

export default function BuyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "Sacoche",
      brand: "Gucci",
      image: "/placeholder.svg?height=440&width=300",
    },
    {
      id: 2,
      name: "Bonnet",
      brand: "Louis Vuitton",
      image: "/placeholder.svg?height=440&width=300",
    },
    {
      id: 3,
      name: "Porte-monnaie",
      brand: "Goyard",
      image: "/placeholder.svg?height=440&width=300",
    },
    {
      id: 4,
      name: "Porte-monnaie",
      brand: "Goyard",
      image: "/placeholder.svg?height=440&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <SliderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        {/* Hero Section */}
        <section
          className="relative h-[605px] bg-cover bg-center"
          style={{ backgroundImage: "url('/Shoot REVIVAL-13 1.png?height=605&width=1440')" }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Filter Bar */}
        <div className="h-[50px] bg-[#F9F7F2] border-b border-[#28512A] flex items-center justify-end px-4">
          <button className="flex items-center gap-2">
            <Filter className="w-6 h-6 text-[#28512A]" />
          </button>
        </div>

        {/* Title Section */}
        <section className="py-16 px-4 text-center">
          <h1 className="text-5xl font-normal text-[#3F3529] mb-8">Exclusivité Privée</h1>
          <p className="text-2xl text-[#3F3529] max-w-4xl mx-auto">
            Saisissez l'occasion d'acquérir des pièces de luxe sélectionnées parmi nos collections de location, à prix
            exclusifs. Un choix rare d'articles haut de gamme pour sublimer votre style avec élégance.
          </p>
        </section>

        {/* Section rien à voir */}
        <section className="py-20 px-4 bg-[#EEE8DC] text-center">
          <h2 className="text-4xl font-semibold text-[#3F3529] mb-4">Rien à voir ici pour le moment</h2>
          <p className="text-lg text-[#3F3529]">
            Du contenu incroyable arrive bientôt !
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

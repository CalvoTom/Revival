"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SliderMenu from "@/components/slider-menu"
import ProductCard from "@/components/product-card"

export default function LocationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "Sacoche",
      brand: "Gucci",
      image: "/Shoot REVIVAL-04 1.png?height=440&width=300",
    },
    {
      id: 2,
      name: "Bonnet",
      brand: "Louis Vuitton",
      image: "/Shoot REVIVAL-05 1.png?height=440&width=300",
    },
    {
      id: 3,
      name: "Porte-monnaie",
      brand: "Goyard",
      image: "/Shoot REVIVAL-12 1.png?height=440&width=300",
    },
    {
      id: 5,
      name: "Chemise",
      brand: "Ralph Laurent",
      image: "/ralph.png?height=440&width=300",
    },
    {
      id: 6,
      name: "Pull",
      brand: "Ami Paris",
      image: "/amis.png?height=440&width=300",
    },
    {
      id: 7,
      name: "Veste Polaire",
      brand: "Maison Kitsuné",
      image: "/polaire.png?height=440&width=300",
    }
  ]

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <SliderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        {/* Hero Section */}
        <section
          className="relative h-[605px] bg-cover bg-center"
          style={{ backgroundImage: "url('/Shoot REVIVAL-10 1.png?height=605&width=1440')" }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Title Section */}
        <section className="py-16 px-4 text-center">
          <h1 className="text-5xl font-normal text-[#3F3529] mb-8">Location de Luxe</h1>
          <p className="text-2xl text-[#3F3529] max-w-4xl mx-auto">
            Découvrez notre collection exclusive de pièces de haute couture disponibles à la location. Brillez lors de
            vos événements spéciaux avec les plus grandes marques de mode.
          </p>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

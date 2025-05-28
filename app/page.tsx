"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SliderMenu from "@/components/slider-menu"
import ProductCard from "@/components/product-card"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const featuredProducts = [
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
      id: 4,
      name: "Porte-monnaie",
      brand: "Goyard",
      image: "/Shoot REVIVAL-12 1.png?height=440&width=300",
    },
  ]

  const exclusiveProducts = [
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
    },
    {
      id: 8,
      name: "Porte-monnaie",
      brand: "Goyard",
      image: "/Shoot REVIVAL-12 1.png?height=440&width=300",
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
          style={{ backgroundImage: "url('/Shoot REVIVAL-10 1.png?height=605&width=1440')" }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Three Steps Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-5xl font-normal text-[#3F3529] mb-4">Louez. Brillez. Recommencez.</h2>
              <p className="text-4xl font-normal text-[#3F3529]">Explorez la mode en 3 étapes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              <div className="text-center">
                <div className="mb-4">
                  <img src="/louez.png?height=317&width=220" alt="Louez" className="mx-auto rounded-lg" />
                </div>
                <h3 className="text-4xl font-normal text-black">Louez</h3>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img src="/brillez.png?height=256&width=220" alt="Brillez" className="mx-auto rounded-lg" />
                </div>
                <h3 className="text-4xl font-normal text-black">Brillez</h3>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <img src="/recommencez.png?height=227&width=220" alt="Recommencez" className="mx-auto rounded-lg" />
                </div>
                <h3 className="text-4xl font-normal text-black">Recommencez</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Divider Image */}
        <section
          className="h-[368px] bg-cover bg-center"
          style={{ backgroundImage: "url('/Shoot REVIVAL-08 1.png?height=368&width=1440')" }}
        ></section>

        {/* Accessoire phare Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-normal text-[#3F3529] mb-2">Homme</h2>
              <h3 className="text-4xl font-normal text-[#3F3529]">Accessoire phare</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Men's Exclusives Hero */}
        <section className="relative py-16">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-normal text-[#3F3529] mb-4">
              Exclusivités <span className="font-bold">Homme</span>
            </h2>
            <p className="text-2xl text-[#3F3529] max-w-4xl mx-auto px-4">
              Cette semaine, nos nouvelles arrivées hommes incarnent l'élégance ultime. Découvrez des pièces signées par
              les plus grandes marques de la mode : Ami Paris, Kitsuné, Jacquemus, Gucci…
            </p>
          </div>

          <div
            className="h-[617px] bg-cover bg-center mb-16"
            style={{ backgroundImage: "url('/Shoot REVIVAL-13 1.png?height=617&width=1440')" }}
          ></div>
        </section>

        {/* Exclusives Products */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-normal text-[#3F3529] mb-2">Homme</h2>
              <h3 className="text-4xl font-normal text-[#3F3529]">Exclusivités</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {exclusiveProducts.map((product) => (
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

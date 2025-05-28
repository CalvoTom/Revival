"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SliderMenu from "@/components/slider-menu"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const productImages = [
    "/Shoot REVIVAL-05 1.png?height=703&width=481",
    "/Shoot REVIVAL-05 2.png?height=150&width=100",
    "/Shoot REVIVAL-05 1.png?height=150&width=100",
  ]

  const reviews = [
    {
      id: 1,
      author: "Marie D.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      author: "Pierre L.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      author: "Sophie M.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <SliderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={productImages[currentImageIndex] || "/placeholder.svg"}
                  alt="Bonnet Louis Vuitton"
                  className="w-full h-[703px] object-cover rounded-[20px]"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center"
                  disabled={currentImageIndex === 0}
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setCurrentImageIndex(Math.min(productImages.length - 1, currentImageIndex + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center"
                  disabled={currentImageIndex === productImages.length - 1}
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-4">
                {productImages.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Product view ${index + 2}`}
                    className="w-[100px] h-[150px] object-cover rounded-[10px] cursor-pointer"
                    onClick={() => setCurrentImageIndex(index + 1)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-normal text-[#3F3529] mb-2">Bonnet Luis Vuitton</h1>
                <h2 className="text-4xl font-bold text-[#3F3529]">Louis Vuitton</h2>
              </div>

              {/* Product Options */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xl font-bold text-[#3F3529] mb-2">Homme</label>
                  <div className="border-b border-[#3F3529]/20 pb-2"></div>
                </div>

                <div>
                  <label className="block text-xl font-bold text-[#3F3529] mb-2">Couleur</label>
                  <div className="border-b border-[#3F3529]/20 pb-2"></div>
                </div>

                <div>
                  <label className="block text-xl font-bold text-[#3F3529] mb-2">Taille</label>
                  <div className="border-b border-[#3F3529]/20 pb-2"></div>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionner une taille" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s">S</SelectItem>
                    <SelectItem value="m">M</SelectItem>
                    <SelectItem value="l">L</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionner une couleur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gris">Gris</SelectItem>
                    <SelectItem value="noir">Noir</SelectItem>
                    <SelectItem value="beige">Beige</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Product Description */}
              <div className="space-y-4">
                <p className="text-lg text-black">
                  Élevez votre style hivernal avec ce bonnet Louis Vuitton, une pièce d'exception alliant sophistication
                  et confort. Conçu dans un gris subtil et
                </p>
                <p className="text-lg text-black/66">
                  orné d'un motif quadrillé délicat en gris clair, ce bonnet incarne le
                </p>
                <button className="text-lg text-[#28512A] underline">Voir plus</button>
              </div>

              {/* Add to Cart Button */}
              <Button className="w-full h-16 bg-[#3F3529] hover:bg-[#3F3529]/90 text-white text-xl font-bold rounded-[20px]">
                Ajouter au panier
              </Button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-[17px] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-semibold text-gray-600">{review.author}</span>
                </div>
                <p className="text-[#3F3529] leading-relaxed">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

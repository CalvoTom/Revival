"use client"

import { Plus } from "lucide-react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  brand: string
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div className="relative mb-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-[440px] object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl text-[#3F3529] font-normal mb-1">{product.name}</h3>
          <p className="text-2xl text-[#3F3529] font-normal">{product.brand}</p>
        </div>

        <button className="w-[25px] h-[25px] border-2 border-[#28512A] rounded flex items-center justify-center hover:bg-[#28512A] hover:text-white transition-colors">
          <Plus className="w-3 h-3" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}

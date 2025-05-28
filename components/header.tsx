"use client"

import { Search, Menu, ShoppingBag, User } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-[100px] bg-[#F9F7F2] border-b-2 border-[#28512A] flex items-center justify-between px-4 relative">
      {/* Left side */}
      <div className="flex items-center gap-4 w-[33.33%]">
        <button onClick={onMenuClick} className="w-[50px] h-[50px] flex items-center justify-center">
          <Menu className="w-6 h-6 text-[#28512A]" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2">
          <Search className="w-6 h-6 text-[#28512A]" strokeWidth={2} />
          <span className="text-2xl text-[#28512A] font-normal">Que cherchez-vous ?</span>
        </div>
      </div>

      {/* Center - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <img src="/logo entier 1.png?height=64&width=194" alt="Revival Logo" className="h-16" />
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-end gap-4 w-[33.33%]">
        <Link href="/cart" className="w-[50px] h-[50px] flex items-center justify-center">
          <ShoppingBag className="w-6 h-6 text-[#28512A]" strokeWidth={2} />
        </Link>

        <button className="w-[50px] h-[50px] flex items-center justify-center">
          <User className="w-6 h-6 text-[#28512A]" strokeWidth={2} />
        </button>
      </div>
    </header>
  )
}

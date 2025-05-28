"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#F9F7F2] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div>
            <img src="/logo 1.png?height=194&width=194" alt="Revival Logo" className="w-48 h-48" />
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-[#28512A] font-normal mb-8">Social</h3>
            <div className="mb-6">
              <h4 className="text-xl text-[#3F3529] font-bold mb-4">Nous vous tenons au courant.</h4>
              <div className="space-y-4">
                <Input
                  placeholder="Votre adresse e-mail"
                  className="border-0 border-b border-[#3F3529]/20 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-[#3F3529]"
                />
                <Button size="sm" className="w-4 h-4 p-0 bg-transparent hover:bg-transparent">
                  <Send className="w-4 h-4 text-[#3F3529]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-[#3F3529] font-bold mb-8">Accès Direct</h3>
            <div className="space-y-6 text-lg text-[#28512A]/75">
              <p>Pricing</p>
              <p>Updates</p>
              <p>Beta</p>
            </div>
          </div>

          {/* News */}
          <div>
            <h3 className="text-lg text-[#3F3529] font-bold mb-8">Actualités</h3>
            <div className="space-y-6 text-lg text-[#28512A]/75">
              <p>Pricing</p>
              <p>Updates</p>
              <p>Beta</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#3F3529]/10">
          <p className="text-sm text-[#3F3529] font-bold mb-4 md:mb-0">© 2025 Revival All right reserved</p>
          <div className="flex gap-6 text-lg text-[#28512A] font-bold">
            <span>Protection des données</span>
            <span>Mentions légales</span>
            <span>Politique de cookies</span>
            <span>CGV</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

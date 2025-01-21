import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-y-4 border-black bg-red-600">
      <div className="flex h-20 items-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <a href="/" className="py-10 h-max">
            <img
              src={logo}
              alt="Logo"
              width={100}
              height={30}
              className="rounded-xl"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-end md:gap-8 md:items-center">
          <a href="/" className="text-xl border-2 hover:scale-110  border-[#01204E] p-2 text-[#01204E] bg-white font-extrabold  rounded-xl transition-colors hover:text-primary">
            HOME
          </a>
          <a href="/products" className="text-xl hover:scale-110 border-2 border-[#01204E] p-2 text-[#01204E] bg-white rounded-xl font-extrabold transition-colors hover:text-primary">
            PRODUCTS
          </a>
          <a href="/about" className="text-xl hover:scale-110 border-2 border-[#01204E] p-2 text-[#01204E] bg-white rounded-xl font-extrabold transition-colors hover:text-primary">
            ABOUT US
          </a>
          
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 justify-end md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-none bg-transparent"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          {isOpen && (
            <div className="absolute top-16 right-0 w-64 bg-white shadow-md p-4">
              <div className="flex flex-col gap-4">
                <a
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  About Us
                </a>
                <a
                  href="/products"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Products
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

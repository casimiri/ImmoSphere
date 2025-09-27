'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Heart, User, Menu, X, Plus } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">ImmoSphere</span>
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher des annonces..."
                className="w-full px-4 py-2 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button className="ml-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Rechercher
            </button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/deposer-annonce"
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Déposer une annonce</span>
            </Link>
            
            <Link href="/favoris" className="p-2 text-gray-600 hover:text-gray-900">
              <Heart className="w-6 h-6" />
            </Link>
            
            <Link href="/compte" className="p-2 text-gray-600 hover:text-gray-900">
              <User className="w-6 h-6" />
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search bar - Mobile */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des annonces..."
              className="w-full px-4 py-2 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/deposer-annonce"
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Déposer une annonce</span>
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-gray-900">
                Toutes les catégories
              </Link>
              <Link href="/compte" className="text-gray-700 hover:text-gray-900">
                Mon compte
              </Link>
              <Link href="/favoris" className="text-gray-700 hover:text-gray-900">
                Mes favoris
              </Link>
            </div>
          </div>
        )}

        {/* Navigation categories - Desktop */}
        <nav className="hidden md:flex items-center justify-between py-3 border-t">
          <div className="flex items-center space-x-8">
            <Link href="/immobilier" className="text-gray-700 hover:text-blue-600 transition-colors">
              Immobilier
            </Link>
            <Link href="/vehicules" className="text-gray-700 hover:text-blue-600 transition-colors">
              Véhicules
            </Link>
            <Link href="/electronique" className="text-gray-700 hover:text-blue-600 transition-colors">
              Électronique
            </Link>
            <Link href="/maison-jardin" className="text-gray-700 hover:text-blue-600 transition-colors">
              Maison & Jardin
            </Link>
            <Link href="/mode" className="text-gray-700 hover:text-blue-600 transition-colors">
              Mode
            </Link>
            <Link href="/loisirs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Loisirs
            </Link>
            <Link href="/emploi" className="text-gray-700 hover:text-blue-600 transition-colors">
              Emploi
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
          </div>
          <Link href="/categories" className="text-sm text-gray-500 hover:text-gray-700">
            Toutes les catégories →
          </Link>
        </nav>
      </div>
    </header>
  );
}
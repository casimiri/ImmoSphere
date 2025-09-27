'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, MapPin, Clock, Star, Search } from 'lucide-react';
import SearchFilters from '@/components/search/SearchFilters';

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: string;
  condition: string;
  is_premium: boolean;
  images: string[];
  created_at: string;
}

export default function ListingsPage() {
  const [listings] = useState<Listing[]>([
    {
      id: '1',
      title: 'Villa 4 chambres - Centre ville',
      description: 'Belle villa de 200m² en plein centre-ville avec garage et jardin.',
      price: 75000000,
      currency: 'XOF',
      location: 'Ouagadougou',
      condition: 'good',
      is_premium: true,
      images: [],
      created_at: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      title: 'Toyota Camry - Excellent état',
      description: 'Toyota Camry de 2018, 65000 km, excellent état, climatisation.',
      price: 12000000,
      currency: 'XOF',
      location: 'Bobo-Dioulasso',
      condition: 'like_new',
      is_premium: false,
      images: [],
      created_at: '2024-01-14T14:30:00Z',
    },
    {
      id: '3',
      title: 'iPhone 15 Pro - Comme neuf',
      description: 'iPhone 15 Pro 256Go, acheté il y a 2 mois, comme neuf avec boîte.',
      price: 550000,
      currency: 'XOF',
      location: 'Koudougou',
      condition: 'like_new',
      is_premium: true,
      images: [],
      created_at: '2024-01-13T09:15:00Z',
    },
    {
      id: '4',
      title: 'Salon complet en bois',
      description: 'Salon complet en bois massif, très confortable, quelques années d\'usage.',
      price: 150000,
      currency: 'XOF',
      location: 'Ouahigouya',
      condition: 'good',
      is_premium: false,
      images: [],
      created_at: '2024-01-12T16:45:00Z',
    },
    {
      id: '5',
      title: 'MacBook Pro 16" M2',
      description: 'MacBook Pro 16" avec puce M2, 32Go RAM, 1To SSD. Parfait état.',
      price: 1500000,
      currency: 'XOF',
      location: 'Banfora',
      condition: 'like_new',
      is_premium: false,
      images: [],
      created_at: '2024-01-11T11:20:00Z',
    },
    {
      id: '6',
      title: 'Complet traditionnel homme',
      description: 'Beau complet traditionnel burkinabé, taille L, porté quelques fois.',
      price: 35000,
      currency: 'XOF',
      location: 'Kaya',
      condition: 'good',
      is_premium: false,
      images: [],
      created_at: '2024-01-10T13:10:00Z',
    },
  ]);

  const [filteredListings, setFilteredListings] = useState<Listing[]>(listings);

  const handleFiltersChange = (filters: any) => {
    let filtered = [...listings];

    if (filters.minPrice && filters.minPrice !== '') {
      filtered = filtered.filter(listing => listing.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice && filters.maxPrice !== '') {
      filtered = filtered.filter(listing => listing.price <= parseInt(filters.maxPrice));
    }
    if (filters.location && filters.location !== '') {
      filtered = filtered.filter(listing => 
        listing.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.condition && filters.condition !== '') {
      filtered = filtered.filter(listing => listing.condition === filters.condition);
    }

    // Sort premium listings first
    filtered.sort((a, b) => {
      if (a.is_premium && !b.is_premium) return -1;
      if (!a.is_premium && b.is_premium) return 1;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    setFilteredListings(filtered);
  };

  const getConditionLabel = (condition: string) => {
    const labels: { [key: string]: string } = {
      new: 'Neuf',
      like_new: 'Comme neuf',
      good: 'Bon état',
      fair: 'État correct',
      poor: 'Mauvais état',
    };
    return labels[condition] || condition;
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Il y a 1 jour';
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 30) return `Il y a ${Math.ceil(diffDays / 7)} semaines`;
    return `Il y a ${Math.ceil(diffDays / 30)} mois`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SearchFilters onFiltersChange={handleFiltersChange} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Annonces ({filteredListings.length})
          </h1>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Plus récentes</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border overflow-hidden group">
              {listing.is_premium && (
                <div className="bg-yellow-400 text-yellow-900 px-3 py-1 text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Premium
                </div>
              )}
              
              <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                <span className="text-gray-400">Image non disponible</span>
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              <div className="p-4">
                <Link 
                  href={`/annonces/${listing.id}`}
                  className="block group-hover:text-blue-600 transition-colors"
                >
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {listing.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {listing.description}
                </p>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold text-blue-600">
                    {new Intl.NumberFormat('fr-FR', {
                      style: 'currency',
                      currency: listing.currency,
                    }).format(listing.price)}
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {getConditionLabel(listing.condition)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatTimeAgo(listing.created_at)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Aucune annonce trouvée
            </h3>
            <p className="text-gray-600">
              Essayez de modifier vos critères de recherche pour voir plus de résultats.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
import Link from 'next/link';
import { ArrowRight, Home as HomeIcon, Car, Smartphone, Sofa, Shirt, Gamepad, Briefcase, Wrench, TrendingUp, Shield, Clock } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: 'Immobilier', slug: 'immobilier', icon: HomeIcon, color: 'bg-blue-100 text-blue-600' },
    { name: 'Véhicules', slug: 'vehicules', icon: Car, color: 'bg-green-100 text-green-600' },
    { name: 'Électronique', slug: 'electronique', icon: Smartphone, color: 'bg-purple-100 text-purple-600' },
    { name: 'Maison & Jardin', slug: 'maison-jardin', icon: Sofa, color: 'bg-orange-100 text-orange-600' },
    { name: 'Mode', slug: 'mode', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
    { name: 'Loisirs', slug: 'loisirs', icon: Gamepad, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Emploi', slug: 'emploi', icon: Briefcase, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Services', slug: 'services', icon: Wrench, color: 'bg-red-100 text-red-600' },
  ];

  const featuredListings = [
    {
      id: '1',
      title: 'Villa 4 chambres - Centre ville',
      price: '75000000',
      currency: 'XOF',
      location: 'Ouagadougou',
      image: '/placeholder-apartment.jpg',
      isPremium: true,
    },
    {
      id: '2',
      title: 'Toyota Camry - Excellent état',
      price: '12000000',
      currency: 'XOF',
      location: 'Bobo-Dioulasso',
      image: '/placeholder-car.jpg',
      isPremium: false,
    },
    {
      id: '3',
      title: 'iPhone 15 Pro - Comme neuf',
      price: '550000',
      currency: 'XOF',
      location: 'Koudougou',
      image: '/placeholder-phone.jpg',
      isPremium: true,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trouvez tout ce que vous cherchez
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Des milliers d&apos;annonces gratuites partout au Burkina Faso
          </p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Que recherchez-vous ?"
              className="w-full px-6 py-4 text-lg rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explorez nos catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Annonces à la une</h2>
            <Link 
              href="/annonces" 
              className="text-blue-600 hover:text-blue-700 flex items-center space-x-2"
            >
              <span>Voir toutes les annonces</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Link
                key={listing.id}
                href={`/annonces/${listing.id}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border overflow-hidden group"
              >
                {listing.isPremium && (
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 text-sm font-medium">
                    ⭐ Premium
                  </div>
                )}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image non disponible</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {listing.title}
                  </h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {new Intl.NumberFormat('fr-FR', {
                      style: 'currency',
                      currency: listing.currency,
                    }).format(Number(listing.price))}
                  </div>
                  <p className="text-gray-600">{listing.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir ImmoSphere ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Entièrement gratuit</h3>
              <p className="text-gray-600">
                Publiez vos annonces gratuitement et contactez les vendeurs sans frais cachés.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sécurisé et fiable</h3>
              <p className="text-gray-600">
                Nos outils de sécurité et nos conseils vous protègent des arnaques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rapide et simple</h3>
              <p className="text-gray-600">
                Trouvez ce que vous cherchez en quelques clics grâce à notre interface intuitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Déposez votre première annonce dès maintenant, c&apos;est gratuit !
          </p>
          <Link
            href="/deposer-annonce"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Déposer une annonce</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}


import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Gallery', href: 'https://gallery.shankaredu.com/' },
  ];

  const destinations = [
    { name: 'South Korea', href: '/destinations/south-korea' },
    { name: 'Canada', href: '/destinations/canada' },
    { name: 'Japan', href: '/destinations/japan' },
    { name: 'USA', href: '/destinations/usa' },
    { name: 'Australia', href: '/destinations/australia' },
    { name: 'UK', href: '/destinations/uk' },
    { name: 'China', href: '/destinations/china' },
    { name: 'Malta', href: '/destinations/malta' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Shankar Education Network</h3>
            <p className="text-gray-300 mb-4">
              Shankar Education Network is a trusted study abroad consultancy based in Dhangadhi and Mahendranagar.
              We offer expert counseling, university placement, and visa guidance with a 100% success rate — helping Nepali students achieve their global education dreams.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-blue-500 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-6 w-6 text-pink-500 hover:text-pink-400 cursor-pointer" />
              <Youtube className="h-6 w-6 text-red-500 hover:text-red-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <Link to={destination.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Head Office - Dhangadhi
              </h4>
              <p className="text-gray-300 text-sm mb-1">Kailali Pool, Dhangadhi</p>
              <p className="text-gray-300 text-sm flex items-center mb-1">
                <Phone className="h-3 w-3 mr-1" />
                091-590716 / 9809426441
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <Mail className="h-3 w-3 mr-1" />
                shankaredu.co@gmail.com
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Branch Office - Mahendranagar
              </h4>
              <p className="text-gray-300 text-sm mb-1">Puspalal Chowk, Mahendranagar</p>
              <p className="text-gray-300 text-sm flex items-center mb-1">
                <Phone className="h-3 w-3 mr-1" />
                9865565109 / 9763318884
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <Mail className="h-3 w-3 mr-1" />
                shankaredumnr@gmail.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Shankar Education Network. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Developed by{' '}
              <a 
                href="https://trawasthi.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                ODS Nepal
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const destinations = [
    { name: 'South Korea', href: '/destinations/south-korea' },
    { name: 'Canada', href: '/destinations/canada' },
    { name: 'Japan', href: '/destinations/japan' },
    { name: 'USA', href: '/destinations/usa' },
    { name: 'Australia', href: '/destinations/australia' },
    { name: 'United Kingdom', href: '/destinations/uk' },
    { name: 'China', href: '/destinations/china' },
    { name: 'Malta', href: '/destinations/malta' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>091-590716 / 9809426441</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>shankaredu.co@gmail.com</span>
              </div>
            </div>
            <div className="text-xs">
              Sunday to Friday - 10:00 AM to 5:00 PM
            </div>
          </div>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-red-600">Shankar</span>{' '}
              <span className="text-blue-600">Education</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/about" 
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          About Us
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/message-from-founder" 
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                        >
                        Message from Founder
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/members" 
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Members
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-2">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services" 
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors font-semibold border-b border-gray-200 mb-2"
                        >
                          Our Services
                        </Link>
                      </NavigationMenuLink>
                      <div className="px-3 py-1 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Destinations
                      </div>
                      {destinations.map((destination) => (
                        <NavigationMenuLink key={destination.name} asChild>
                          <Link 
                            to={destination.href} 
                            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors text-sm"
                          >
                            {destination.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Testimonials
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blogs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Blogs
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="https://gallery.shankaredu.com/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Gallery
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link
              to="/counseling"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/message-from-founder"
                className="block px-3 py-4 pl-6 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Message from Founder
              </Link>
              <Link
                to="/members"
                className="block px-3 py-4 pl-6 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Members
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              {destinations.map((destination) => (
                <Link
                  key={destination.name}
                  to={destination.href}
                  className="block px-3 py-2 pl-6 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {destination.name}
                </Link>
              ))}
              <Link
                to="/testimonials"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/blogs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/counseling"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="https://gallery.shankaredu.com/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="//contact"
                className="block w-full mx-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

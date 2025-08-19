import { MapPin, GraduationCap, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Destinations = () => {
  const destinations = [
    {
      name: 'South Korea',
      flag: '🇰🇷',
      image: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/SOUTH-KOREA.jpg',
      overview: 'World-class technology education with generous scholarships and vibrant cultural experience.',
      universities: ['Seoul National University', 'KAIST', 'Yonsei University', 'Korea University'],
      programs: ['Engineering', 'Computer Science', 'Business', 'Medicine', 'Korean Studies'],
      visaProcess: 'Student visa (D-2) processing with high approval rates for qualified students.'
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      image: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/Canada.jpg',
      overview: 'Quality education system with post-graduation work opportunities and pathway to permanent residency.',
      universities: ['University of Toronto', 'McGill University', 'UBC', 'University of Waterloo'],
      programs: ['Engineering', 'Computer Science', 'Business', 'Healthcare', 'Natural Sciences'],
      visaProcess: 'Study permit application with comprehensive documentation support.'
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      image: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/Japan.jpg',
      overview: 'Advanced technology and research opportunities with unique cultural immersion.',
      universities: ['University of Tokyo', 'Kyoto University', 'Osaka University', 'Tohoku University'],
      programs: ['Engineering', 'Technology', 'Robotics', 'Medicine', 'Japanese Studies'],
      visaProcess: 'Student visa with language proficiency requirements and cultural preparation.'
    },
    {
      name: 'USA',
      flag: '🇺🇸',
      image: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/USA.jpg',
      overview: 'World\'s leading higher education system with diverse programs and research opportunities.',
      universities: ['Harvard University', 'MIT', 'Stanford University', 'University of California'],
      programs: ['All Major Fields', 'Liberal Arts', 'STEM', 'Business', 'Medicine'],
      visaProcess: 'F-1 student visa with interview preparation and financial documentation.'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      image: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/Australia.jpg',
      overview: 'High-quality education with excellent work opportunities and pleasant climate.',
      universities: ['University of Melbourne', 'Australian National University', 'University of Sydney'],
      programs: ['Engineering', 'Business', 'Medicine', 'Environmental Studies', 'Mining'],
      visaProcess: 'Student visa (subclass 500) with streamlined application process.'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/UK.jpg',
      overview: 'Historic universities with excellent academic reputation and shorter degree duration.',
      universities: ['Oxford University', 'Cambridge University', 'Imperial College London', 'UCL'],
      programs: ['Liberal Arts', 'Engineering', 'Business', 'Medicine', 'Law'],
      visaProcess: 'Student visa with points-based system and English proficiency requirements.'
    },
    {
      name: 'China',
      flag: '🇨🇳',
      image: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/China.jpg',
      overview: 'Rapidly growing education sector with affordable tuition and scholarship opportunities.',
      universities: ['Peking University', 'Tsinghua University', 'Fudan University', 'Shanghai Jiao Tong'],
      programs: ['Engineering', 'Medicine', 'Business', 'Chinese Studies', 'Technology'],
      visaProcess: 'X1/X2 student visa with health certificate and academic verification.'
    },
    {
      name: 'Malta',
      flag: '🇲🇹',
      image: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/Malta-scaled.jpg',
      overview: 'English-speaking EU country with beautiful Mediterranean setting and affordable education.',
      universities: ['University of Malta', 'Malta College of Arts Science & Technology'],
      programs: ['Business', 'Engineering', 'Medicine', 'Maritime Studies', 'Tourism'],
      visaProcess: 'EU student visa with simplified process for Nepali students.'
    }
  ];

  // Function to generate WhatsApp URL with country-specific message
  const getWhatsAppUrl = (countryName) => {
    const message = `Hello, I'm interested in applying to study in ${countryName}. Can you provide more information?`;
    return `https://wa.me/9779809426441?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study Destinations</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore world-class education opportunities across the globe with our expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2">
                    <span className="text-2xl">{destination.flag}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.overview}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Top Universities</h4>
                        <p className="text-sm text-gray-600">{destination.universities.join(', ')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Popular Programs</h4>
                        <p className="text-sm text-gray-600">{destination.programs.join(', ')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Visa Process</h4>
                        <p className="text-sm text-gray-600">{destination.visaProcess}</p>
                      </div>
                    </div>
                  </div>

                  {/* Apply Now Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => window.open(getWhatsAppUrl(destination.name), '_blank')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                    >
                      Apply Now to {destination.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized guidance for your chosen destination with our expert counselors
          </p>
          <button 
            onClick={() => window.open('https://wa.me/9779809426441', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Free Consultation
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Destinations;
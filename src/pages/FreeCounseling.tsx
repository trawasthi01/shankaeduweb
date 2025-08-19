import { Calendar, Clock, CheckCircle, Phone, Mail } from 'lucide-react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const FreeCounseling = () => {
  useEffect(() => {
    // Redirect to Calendly
    window.location.href = 'https://calendly.com/shankaredumnr/30min';
  }, []);

  const benefits = [
    'Personalized university recommendations',
    'Complete visa guidance and support',
    'Scholarship and funding opportunities',
    'Language preparation assistance',
    'Pre-departure orientation',
    'Post-arrival support services'
  ];

  const destinations = [
    'South Korea', 'Canada', 'Japan', 'USA', 'Australia', 'UK', 'China', 'Malta'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Loading/Redirect Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Redirecting to Booking...</h1>
            <p className="text-xl max-w-3xl mx-auto">
              You will be redirected to our Calendly booking system in a moment.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/shankaredumnr/30min"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                Click here if not redirected automatically
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Schedule Your Free Consultation</h2>
              <p className="text-gray-600 mb-8">
                You are being redirected to our Calendly booking page. If the redirection fails, please use the button above.
              </p>
            </div>
            
            {/* Benefits Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Get</h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">091-590716 / 9809426441</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">shankaredu.co@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Sunday to Friday - 10:00 AM to 5:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-red-50 rounded-lg">
                <Calendar className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response Guarantee</h3>
                <p className="text-gray-700">
                  We guarantee to respond to your inquiry within 24 hours. Our counselors are standing by to help you achieve your study abroad dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FreeCounseling;

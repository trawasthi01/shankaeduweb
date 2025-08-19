import { GraduationCap, MapPin, Clock, DollarSign, Users, Award, X } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

// Define form data type
type FormData = {
  name: string;
  email: string;
  phone: string;
  applyFor: string;
  otherCountry: string;
  course: string;
  message: string;
};

const SouthKorea = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    applyFor: '',
    otherCountry: '',
    course: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Determine the country to display
    const selectedCountry = formData.applyFor === 'Others' 
      ? formData.otherCountry 
      : formData.applyFor;

    // Construct WhatsApp message
    const message = `New Study Application:%0A%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Apply For: ${selectedCountry}%0A
Course: ${formData.course}%0A
Message: ${formData.message || 'N/A'}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/9779809426441?text=${message}`, '_blank');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      applyFor: '',
      otherCountry: '',
      course: '',
      message: ''
    });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-900">Study Application Form</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+977 9800001111"
                  />
                </div>
              </div>
              
              {/* Apply For Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Apply For *
                </label>
                <select
                  name="applyFor"
                  value={formData.applyFor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Country</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Canada">Canada</option>
                  <option value="Japan">Japan</option>
                  <option value="USA">USA</option>
                  <option value="Australia">Australia</option>
                  <option value="UK">UK</option>
                  <option value="China">China</option>
                  <option value="Malta">Malta</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              
              {/* Conditional Other Country Field */}
              {formData.applyFor === 'Others' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Specify Country *
                  </label>
                  <input
                    type="text"
                    name="otherCountry"
                    value={formData.otherCountry}
                    onChange={handleChange}
                    required={formData.applyFor === 'Others'}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter country name"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course of Interest *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a course</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business">Business Management</option>
                  <option value="IT">Information Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Arts">Arts & Humanities</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your questions or additional information"
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🇰🇷</span>
            <h1 className="text-4xl md:text-5xl font-bold">Study in South Korea</h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-center">
            World-class technology education with generous scholarships and vibrant cultural experience
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose South Korea?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">World-Class Education</h3>
                    <p className="text-gray-600">Top-ranked universities with cutting-edge technology and research facilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Generous Scholarships</h3>
                    <p className="text-gray-600">Government and university scholarships covering tuition and living expenses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cultural Experience</h3>
                    <p className="text-gray-600">Rich cultural heritage with modern lifestyle and technology innovation</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://gallery.shankaredu.com/wp-content/uploads/2025/06/SOUTH-KOREA.jpg"
                alt="South Korea"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Top Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Seoul National University', 'KAIST', 'Yonsei University', 'Korea University'].map((university, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">{university}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Study in South Korea?</h2>
          <p className="text-lg text-gray-600 mb-8">Get expert guidance for your South Korean education journey</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.open('https://calendly.com/shankaredumnr/30min', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Free Counseling
            </button>
            <button 
              onClick={() => setShowForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SouthKorea;
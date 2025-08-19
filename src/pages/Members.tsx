import { Users, Mail, Phone, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Members = () => {
  const hqMembers = [
    {
      id: 1,
      name: "Mr. Shankar Chand",
      position: "Founder & CEO",
      image: "https://gallery.shankaredu.com/wp-content/uploads/2025/06/Shankar-sir--300x200.jpg",
      email: "siliconshankar@gmail.com",
      phone: "+977-9809426441",
      description: "Visionary leader with over 10 years of experience in international education consulting. Committed to helping Nepalese students achieve their dreams of studying abroad.",
      specialization: "Strategic Planning, International Relations"
    },
    {
      id: 2,
      name: "Ms. Gita Bhatta",
      position: "Documentation Officer",
      image: "https://gallery.shankaredu.com/wp-content/uploads/2025/06/Gitu-bhatta-300x300.jpg",
      email: "gitabhatta@shankaredu.com",
      phone: "+977-091590716",
      description: "Meticulous attention to detail in handling all student documents and applications. Ensures all paperwork meets international standards.",
      specialization: "Document Verification, Application Processing"
    },
  ];

  const mahendranagarMembers = [
    {
      id: 1,
      name: "Mr. Bikash Pandeya",
      position: "Branch Manager",
      image: "https://gallery.shankaredu.com/wp-content/uploads/2025/06/bikash.jpg",
      email: "bikash@shankaredu.com",
      phone: "+977-091590717",
      description: "Experienced manager with a passion for student success. Oversees all operations at our Mahendranagar branch with precision and care.",
      specialization: "Operations Management, Student Counseling"
    },
    {
      id: 2,
      name: "Mr. TR Awasthi",
      position: "Education Counselor",
      image: "https://gallery.shankaredu.com/wp-content/uploads/2025/06/tr-awasthi.jpg",
      email: "trawasthi@shankaredu.com",
      phone: "+977-091590718",
      description: "Dedicated counselor with expertise in matching students with ideal international programs. Provides personalized guidance for academic success.",
      specialization: "Career Counseling, University Selection"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team Members
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the dedicated professionals who make your international education dreams come true
            </p>
          </div>
        </div>
      </section>

      {/* Dhangadhi HQ Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dhangadhi Headquarters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our main team brings together years of experience in international education, 
              visa processing, and student guidance to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hqMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Specialization:</p>
                    <p className="text-sm text-gray-600 mb-4">{member.specialization}</p>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span>{member.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mahendranagar Branch Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mahendranagar Branch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated branch team in Mahendranagar provides personalized guidance 
              and local support for students in the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mahendranagarMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Specialization:</p>
                    <p className="text-sm text-gray-600 mb-4">{member.specialization}</p>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span>{member.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced professionals are here to guide you through every step 
            of your international education journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://calendly.com/shankaredumnr/30min', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={() => window.open('https://wa.me/9779809426441', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Members;
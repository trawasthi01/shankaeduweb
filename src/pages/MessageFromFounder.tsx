import { Quote, Heart, Target, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const MessageFromFounder = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Message from Our Founder
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A personal note about our mission, vision, and commitment to your success
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="w-40 h-40 rounded-full mx-auto mb-6 shadow-2xl border-4 border-blue-200 overflow-hidden">
                <img 
                  src="https://gallery.shankaredu.com/wp-content/uploads/2025/06/Shankar-sir--300x200.jpg" 
                  alt="Mr. Shankar Chand - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <Quote className="absolute -top-2 -right-2 h-10 w-10 text-blue-600 bg-white rounded-full p-2 shadow-lg border-2 border-blue-200" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Mr. Shankar Chand</h2>
            <p className="text-lg text-blue-600 font-semibold mb-1">Founder & CEO</p>
            <p className="text-gray-600">Shankar Education Network</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                "Dear Students and Families,
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                When I founded Shankar Education Network, I had a simple yet powerful vision: to make 
                world-class international education accessible to every deserving Nepalese student. 
                Having witnessed countless bright minds in our region struggle to find the right guidance 
                and support for their international education dreams, I knew there was a gap that needed 
                to be filled.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our journey began with a commitment to honesty, transparency, and unwavering support. 
                We didn't just want to be another consultancy; we wanted to be your trusted partner 
                in this life-changing journey. Today, I am proud to say that we have maintained our 
                100% visa success rate not through false promises, but through meticulous preparation, 
                expert guidance, and genuine care for each student's future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Every success story that comes through our doors fills my heart with immense pride and 
                joy. When I see our students thriving in top universities across South Korea, Canada, 
                Japan, USA, Australia, UK, China, and Malta, I am reminded of why we do what we do. 
                Your success is our success, and your dreams fuel our passion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Thank you for trusting us with your future. Together, we will continue to bridge the 
                gap between your aspirations and achievements."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-6 font-semibold">
                With warm regards and best wishes,<br />
                Shankar Chand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at Shankar Education Network
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication, transparent processes, and ethical practices 
                in all our dealings with students and universities.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, ensuring the highest 
                quality guidance and support for our students.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student-Centric</h3>
              <p className="text-gray-600">
                Every decision we make is centered around what's best for our students' 
                success and future prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            My Personal Journey
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Beginning</h3>
              <p className="text-gray-700 leading-relaxed">
                Growing up in Nepal, I witnessed firsthand the challenges that talented students 
                faced when trying to pursue higher education abroad. The lack of proper guidance, 
                misinformation, and inadequate support systems were common barriers that prevented 
                many deserving students from achieving their dreams.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                I envisioned a consultancy that would not just process applications, but would 
                genuinely care about each student's journey. A place where students could find 
                honest advice, comprehensive support, and the confidence to pursue their dreams 
                without fear of failure.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Achievement</h3>
              <p className="text-gray-700 leading-relaxed">
                Today, Shankar Education Network stands as a testament to what's possible when 
                passion meets purpose. Our 100% visa success rate and hundreds of successful 
                students are proof that with the right guidance and support, every dream is 
                achievable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us be your trusted partner in achieving your international education dreams. 
            Together, we can make your aspirations a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://calendly.com/shankaredumnr/30min', '_blank')}
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
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

export default MessageFromFounder;

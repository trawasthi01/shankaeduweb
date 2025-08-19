
import { CheckCircle, Users, Target, Eye, Award, Briefcase } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  const stats = [
    { number: '100%', label: 'Visa Success Rate' },
    { number: '500+', label: 'Students Guided' },
    { number: '8+', label: 'Countries' },
    { number: '5+', label: 'Years Experience' }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Proven Success Record',
      description: 'Our 100% visa success rate demonstrates our expertise and commitment to student success.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our experienced counselors provide personalized guidance throughout your journey.'
    },
    {
      icon: Award,
      title: 'Trusted Partnerships',
      description: 'Strong relationships with top universities and institutions worldwide.'
    },
    {
      icon: Briefcase,
      title: 'Comprehensive Support',
      description: 'From university selection to visa approval and beyond - we are with you every step.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Shankar Education Network
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering Nepalese students to achieve their international education dreams 
              with unmatched expertise and personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Shankar Education Network is Nepal's premier educational consultancy, 
                dedicated to helping students achieve their dreams of studying abroad. 
                With our headquarters in Dhangadhi and branch office in Mahendranagar, 
                we serve students across the Sudurpashchim Province and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced education counselors and visa experts work 
                tirelessly to ensure that every student receives personalized guidance 
                and support throughout their international education journey. We pride 
                ourselves on our 100% visa success rate and the lasting relationships 
                we build with our students.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" 
                alt="Happy students celebrating their success in international education"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Founded with the vision of making international education accessible to 
                every aspiring Nepalese student, Shankar Education Network began its 
                journey with a simple yet powerful mission: to bridge the gap between 
                dreams and reality.
              </p>
              <p className="text-lg text-gray-600">
                Today, we are proud to have helped hundreds of students secure admissions 
                in top universities across South Korea, Canada, Japan, USA, Australia, 
                UK, China, and Malta with our 100% visa success rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-red-50 rounded-lg">
              <Eye className="h-16 w-16 text-red-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the leading educational consultancy in Nepal, empowering every 
                student with the opportunity to access world-class education and build 
                a successful global career.
              </p>
            </div>
            
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <Target className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To provide comprehensive, personalized, and reliable educational 
                consulting services that ensure 100% success in visa approvals and 
                university admissions for our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              Discover what makes Shankar Education Network the preferred choice for international education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
                <item.icon className="h-12 w-12 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;

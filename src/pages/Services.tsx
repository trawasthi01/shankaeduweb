import { useState } from 'react';
import { GraduationCap, FileText, Users, BookOpen, Globe, Award, Clock, CheckCircle, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import EnrollCourseForm from '../components/EnrollCourseForm';

const Services = () => {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const mainServices = [
    {
      title: 'University Selection',
      description: 'Expert guidance to choose the right university and program based on your interests and career goals.',
      icon: GraduationCap
    },
    {
      title: 'Visa Processing',
      description: 'Complete assistance with visa applications, document preparation, and interview guidance.',
      icon: FileText
    },
    {
      title: 'Scholarship Assistance',
      description: 'Guidance and support to find and apply for scholarships and financial aid opportunities.',
      icon: Award
    },
    {
      title: 'Career Counseling',
      description: 'Personalized counseling to align your education with your career aspirations.',
      icon: Users
    }
  ];

  const languageCourses = [
    {
      title: 'Korean Language Course',
      duration: '6 months',
      level: 'Beginner to Advanced',
      features: ['Grammar & Vocabulary', 'Speaking Practice', 'TOPIK Preparation', 'Cultural Training'],
      description: 'Comprehensive Korean language training designed specifically for students planning to study in South Korea.'
    },
    {
      title: 'Japanese Language Course',
      duration: '6 months', 
      level: 'Beginner to Advanced',
      features: ['Hiragana & Katakana', 'Kanji Learning', 'JLPT Preparation', 'Business Japanese'],
      description: 'Complete Japanese language course covering all aspects needed for academic success in Japan.'
    },
    {
      title: 'IELTS Preparation',
      duration: '3 months',
      level: 'All levels',
      features: ['Reading Skills', 'Writing Tasks', 'Listening Practice', 'Speaking Mock Tests'],
      description: 'Intensive IELTS preparation course to help you achieve your target band score for university admission.'
    },
    {
      title: 'PTE Academic',
      duration: '2 months',
      level: 'Intermediate to Advanced', 
      features: ['Computer-based Practice', 'Mock Tests', 'Score Analysis', 'Speaking Fluency'],
      description: 'Specialized PTE Academic preparation with computer-based practice tests and expert guidance.'
    }
  ];

  const additionalServices = [
    {
      title: 'Accommodation Assistance',
      description: 'Help finding suitable accommodation options near your university.',
      icon: Clock
    },
    {
      title: 'Travel Arrangements',
      description: 'Assistance with booking flights and planning your travel to your study destination.',
      icon: Globe
    },
    {
      title: 'Pre-Departure Orientation',
      description: 'Guidance and information to prepare you for life and studies abroad.',
      icon: CheckCircle
    }
  ];

  const handleCourseEnrollment = (courseName: string) => {
    setSelectedCourse(courseName);
    setEnrollOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive support for your international education journey
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help You Succeed
            </h2>
            <p className="text-lg text-gray-600">
              Our core services designed to guide you every step of the way
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Language Preparation Courses</h2>
            <p className="text-lg text-gray-600">
              Master the language skills needed for your international education journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languageCourses.map((course, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <BookOpen className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <div className="mb-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2">
                    {course.duration}
                  </span>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleCourseEnrollment(course.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Making your study abroad experience seamless and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us guide you towards a world-class education and a brighter future
          </p>
          <button 
            onClick={() => window.open('https://wa.me/9779809426441', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      </section>

      <EnrollCourseForm 
        isOpen={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        courseName={selectedCourse}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;

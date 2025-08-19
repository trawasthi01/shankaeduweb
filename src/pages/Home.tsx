import { ArrowRight, CheckCircle, Users, Globe, Award, HeadphonesIcon, BookOpen, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PopupAd from '../components/PopupAd';
import EnrollCourseForm from '../components/EnrollCourseForm';
import { blogPosts } from '../data/blogData';

const Home = () => {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const features = [
    {
      icon: CheckCircle,
      title: '100% Visa Success',
      description: 'Proven track record with successful visa approvals for all our students'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced counselors and education consultants to guide your journey'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partnerships with top universities and institutions worldwide'
    },
    {
      icon: HeadphonesIcon,
      title: 'Full Support',
      description: 'Complete assistance from application to arrival in your chosen destination'
    }
  ];

  const services = [
    {
      title: 'University Selection',
      description: 'Find the perfect university and program that matches your career goals',
      image: 'https://www.harringtonhousing.com/uploads/0003/3066/2023/06/21/5-factors-to-consider-when-choosing-a-university.jpg'
    },
    {
      title: 'Visa Processing',
      description: 'Complete visa assistance with document preparation and interview support',
      image: 'https://media.licdn.com/dms/image/C4E12AQFrXFg6CqnUNw/article-cover_image-shrink_600_2000/0/1520141481975?e=2147483647&v=beta&t=-m5DxQvCtjv48qx8vBlDT7_3Lg1npg892CGgI_Xq3kE'
    },
    {
      title: 'Language Preparation',
      description: 'Korean, Japanese, IELTS, and PTE classes to enhance your language skills',
      image: 'https://nationalinstituteoflanguage.in/wp-content/uploads/2022/05/cheerful-arab-guy-foreign-language-teacher-giving-2022-02-07-06-39-47-utc-2048x1366.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      destination: 'South Korea',
      quote: 'Thanks to Shankar Education Network, I got admission to Seoul National University with a full scholarship. Their guidance was invaluable!'
    },
    {
      name: 'Rohit Thapa',
      destination: 'Canada',
      quote: 'The visa process seemed impossible, but the team made it smooth and successful. Now studying at University of Toronto!'
    },
    {
      name: 'Anita Gurung',
      destination: 'Japan',
      quote: 'From language preparation to university admission, they supported me every step of the way. Highly recommended!'
    }
  ];

  const courses = [
    {
      title: 'Korean Language Course',
      duration: '6 months',
      level: 'Beginner to Advanced',
      description: 'Complete Korean language training for students planning to study in South Korea.'
    },
    {
      title: 'Japanese Language Course',
      duration: '6 months',
      level: 'Beginner to Advanced',
      description: 'Comprehensive Japanese language course for Japan-bound students.'
    },
    {
      title: 'IELTS Preparation',
      duration: '3 months',
      level: 'All levels',
      description: 'Intensive IELTS preparation course to achieve your target band score.'
    },
    {
      title: 'PTE Academic',
      duration: '2 months',
      level: 'Intermediate to Advanced',
      description: 'PTE Academic test preparation with practice tests and expert guidance.'
    }
  ];

  const destinations = [
    { name: 'South Korea', flag: '🇰🇷', link: '/destinations/south-korea' },
    { name: 'Canada', flag: '🇨🇦', link: '/destinations/canada' },
    { name: 'Japan', flag: '🇯🇵', link: '/destinations/japan' },
    { name: 'USA', flag: '🇺🇸', link: '/destinations/usa' },
    { name: 'Australia', flag: '🇦🇺', link: '/destinations/australia' },
    { name: 'UK', flag: '🇬🇧', link: '/destinations/uk' },
    { name: 'China', flag: '🇨🇳', link: '/destinations/china' },
    { name: 'Malta', flag: '🇲🇹', link: '/destinations/malta' }
  ];

  const handleBookCounseling = () => {
    window.open('https://calendly.com/shankaredumnr/30min', '_blank');
  };

  const handleCourseEnrollment = (courseName: string) => {
    setSelectedCourse(courseName);
    setEnrollOpen(true);
  };

  // Get first 3 blog posts for homepage
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <PopupAd />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Study Abroad with <span className="text-yellow-400">100% Visa Success Rate</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Nepal's trusted consultancy for international education guidance. 
            Your gateway to world-class education and global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookCounseling}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors inline-flex items-center justify-center"
            >
              Book Free Counseling
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button 
              onClick={() => window.open('https://wa.me/9779809426441', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Shankar Education Network
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              With years of experience in international education consulting, we have successfully 
              guided hundreds of Nepalese students to achieve their dreams of studying abroad. 
              Our 100% visa success rate speaks for our expertise and dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Preparation Courses */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Language Preparation Courses</h2>
            <p className="text-base md:text-lg text-gray-600">
              Enroll in our specialized courses to prepare for your international education journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Level:</span> {course.level}
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <button
                  onClick={() => handleCourseEnrollment(course.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm md:text-base"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for your international education journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/services"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Top Study Destinations</h2>
            <p className="text-base md:text-lg text-gray-600">
              Explore world-class education opportunities across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {destinations.map((destination, index) => (
              <Link 
                key={index} 
                to={destination.link}
                className="text-center p-3 md:p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-2xl md:text-4xl mb-2">{destination.flag}</div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-900">{destination.name}</h3>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <Link 
              to="/destinations"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors inline-flex items-center text-sm md:text-base"
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-base md:text-lg text-gray-600">
              Stay updated with the latest insights and tips for your study abroad journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">
                      {blog.category}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <Link 
              to="/blogs"
              className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors inline-flex items-center text-sm md:text-base"
            >
              View All Blog Posts
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-base md:text-lg text-gray-600">
              Success stories from students who achieved their dreams with our guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <p className="text-gray-600 mb-4 italic text-sm md:text-base">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">Now studying in {testimonial.destination}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <Link 
              to="/testimonials"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors inline-flex items-center text-sm md:text-base"
            >
              Read More Stories
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Visit Our Offices</h2>
            <p className="text-base md:text-lg">
              Meet our expert counselors at our convenient locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="text-center p-6 bg-blue-800 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-4">Head Office - Dhangadhi</h3>
              <p className="mb-2 text-sm md:text-base">📍 Kailali Pool, Dhangadhi</p>
              <p className="mb-2 text-sm md:text-base">📞 091-590716 / 9809426441</p>
              <p className="mb-4 text-sm md:text-base">📧 shankaredu.co@gmail.com</p>
              <button 
                onClick={() => window.open('https://wa.me/9779809426441', '_blank')}
                className="bg-green-500 hover:bg-green-600 px-4 md:px-6 py-2 rounded-lg transition-colors text-sm md:text-base"
              >
                WhatsApp Us
              </button>
            </div>
            
            <div className="text-center p-6 bg-blue-800 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-4">Branch Office - Mahendranagar</h3>
              <p className="mb-2 text-sm md:text-base">📍 Puspal Chowk, Mahendranagar</p>
              <p className="mb-2 text-sm md:text-base">📞 9865565109 / 9763318884</p>
              <p className="mb-4 text-sm md:text-base">📧 shankaredumnr@gmail.com</p>
              <button 
                onClick={() => window.open('https://wa.me/9779865565109', '_blank')}
                className="bg-green-500 hover:bg-green-600 px-4 md:px-6 py-2 rounded-lg transition-colors text-sm md:text-base"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
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

export default Home;

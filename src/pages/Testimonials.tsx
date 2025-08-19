import { Star, Quote, GraduationCap, Award, Globe, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      destination: 'South Korea',
      university: 'Seoul National University',
      program: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
      quote: 'Thanks to Shankar Education Network, I got admission to Seoul National University with a full scholarship. Their guidance throughout the application process was invaluable. The team helped me with everything from university selection to visa processing.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Rohit Thapa',
      destination: 'Canada',
      university: 'University of Toronto',
      program: 'Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      quote: 'The visa process seemed impossible, but the team at Shankar Education made it smooth and successful. Now I\'m studying at University of Toronto! Their expertise in Canadian immigration policies was impressive.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Anita Gurung',
      destination: 'Japan',
      university: 'Kyoto University',
      program: 'International Relations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      quote: 'From language preparation to university admission, they supported me every step of the way. The Japanese language classes were particularly helpful. Highly recommended for anyone planning to study in Japan!',
      rating: 5,
      year: '2024'
    },
    {
      name: 'Suraj Bista',
      destination: 'Australia',
      university: 'University of Melbourne',
      program: 'Business Administration',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      quote: 'Excellent service from start to finish. The counselors helped me choose the right university and program that matched my career goals. Now I\'m pursuing my MBA at University of Melbourne.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Sunita Khatri',
      destination: 'USA',
      university: 'University of California',
      program: 'Medicine',
      image: 'https://images.unsplash.com/photo-1559528352-2d99f2b1a5e5?auto=format&fit=crop&w=150&q=80',
      quote: 'The team\'s expertise in US visa applications is outstanding. They prepared me thoroughly for the visa interview and helped with all documentation. Successfully got my F-1 visa on the first attempt!',
      rating: 5,
      year: '2024'
    },
    {
      name: 'Rajesh Adhikari',
      destination: 'UK',
      university: 'Imperial College London',
      program: 'Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      quote: 'Professional and reliable service. The guidance for UK university applications was comprehensive. They helped me understand the UCAS system and prepared a strong personal statement.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Kamala Rai',
      destination: 'China',
      university: 'Peking University',
      program: 'Chinese Studies',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80',
      quote: 'Great support for studying in China. They helped me with scholarship applications and made the entire process hassle-free. The Chinese language preparation course was very beneficial.',
      rating: 5,
      year: '2024'
    },
    {
      name: 'Bikash Shrestha',
      destination: 'Malta',
      university: 'University of Malta',
      program: 'Maritime Studies',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      quote: 'Shankar Education Network opened doors to opportunities I never knew existed. Malta turned out to be a perfect choice for my studies. Affordable, quality education in English within the EU!',
      rating: 5,
      year: '2024'
    },
    {
      name: 'Sita Poudel',
      destination: 'South Korea',
      university: 'Yonsei University',
      program: 'Korean Language & Literature',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      quote: 'The Korean language course at Shankar Education was exceptional. It prepared me not just linguistically but culturally for my studies in Seoul. I passed TOPIK Level 4 before arriving!',
      rating: 5,
      year: '2024'
    },
  ];

  const stats = [
    { number: '500+', label: 'Success Stories', icon: Users },
    { number: '100%', label: 'Visa Success Rate', icon: Award },
    { number: '8+', label: 'Countries', icon: Globe },
    { number: '50+', label: 'Partner Universities', icon: GraduationCap }
  ];

  const achievements = [
    {
      title: '12+ Years of Excellence',
      description: 'Over a decade of experience in international education consulting'
    },
    {
      title: 'Government Recognition',
      description: 'Licensed and recognized by Nepal Government for education consulting'
    },
    {
      title: 'University Partnerships',
      description: 'Direct partnerships with top universities across 8 countries'
    },
    {
      title: 'Scholarship Success',
      description: 'Helped students secure over $2M in scholarships and financial aid'
    }
  ];

  const destinationStats = [
    { country: 'South Korea', flag: '🇰🇷', students: '200+', topChoice: 'Seoul National University' },
    { country: 'Canada', flag: '🇨🇦', students: '120+', topChoice: 'University of Toronto' },
    { country: 'Japan', flag: '🇯🇵', students: '100+', topChoice: 'Waseda University' },
    { country: 'USA', flag: '🇺🇸', students: '70+', topChoice: 'Arizona State University' },
    { country: 'Australia', flag: '🇦🇺', students: '50+', topChoice: 'University of Melbourne' },
    { country: 'UK', flag: '🇬🇧', students: '30+', topChoice: 'University of Manchester' },
    { country: 'China', flag: '🇨🇳', students: '20+', topChoice: 'Peking University' },
    { country: 'Malta', flag: '🇲🇹', students: '15+', topChoice: 'University of Malta' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Students Say</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Real success stories from students who achieved their dreams with our guidance. 
              Join hundreds of successful students who are now studying at top universities worldwide.
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
                <stat.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">
              Milestones that reflect our commitment to student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <Award className="h-10 w-10 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Across All Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Across All Destinations</h2>
            <p className="text-lg text-gray-600">
              Our track record of successful student placements worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinationStats.map((destination, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                <div className="text-4xl mb-3">{destination.flag}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{destination.country}</h3>
                <div className="text-2xl font-bold text-red-600 mb-2">{destination.students}</div>
                <p className="text-sm text-gray-600 mb-1">Successful Students</p>
                <div className="border-t pt-3 mt-3">
                  <p className="text-xs font-semibold text-gray-700">Top Choice:</p>
                  <p className="text-xs text-gray-600">{destination.topChoice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our students who are now studying at top universities worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const nameParts = testimonial.name.split(' ');
              const initials = nameParts.length >= 2 
                ? `${nameParts[0].charAt(0)}.${nameParts[nameParts.length - 1].charAt(0)}.`
                : testimonial.name.charAt(0) + '.';
              
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.university}</p>
                      <p className="text-xs text-red-600">{testimonial.destination} • {testimonial.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-red-200 mb-2" />
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-gray-900">{testimonial.program}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600">
              Watch our students share their journey in their own words
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-12 text-center">
            <GraduationCap className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Video Testimonials Coming Soon</h3>
            <p className="text-gray-600">
              We're currently working on collecting video testimonials from our students abroad. 
              Check back soon to see them share their experiences!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who achieved their international education dreams with our expert guidance
          </p>
          <button 
            onClick={() => window.open('https://wa.me/9779809426441', '_blank')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Journey Today
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Testimonials;

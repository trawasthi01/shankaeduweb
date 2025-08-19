import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface AdConfig {
  id: string;
  type: 'text' | 'image' | 'both';
  imageSize: 'small' | 'medium' | 'full';
  photoUrl?: string;
  title?: string;
  subtitle?: string;
  buttonText: string;
  duration?: number;
}

const PopupAd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(6);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  
  // Enhanced ad configuration with system enable/disable
  const adSystemConfig = {
    enabled: true, // Master switch for all ads
    showSequentially: true,
    delayBetweenAds: 20,
    ads: [
      {
        id: 'ad1',
        type: 'image' as const,
        imageSize: 'full' as const, // Changed to 'full'
        photoUrl: 'https://gallery.shankaredu.com/wp-content/uploads/2025/06/506464431_1030390899221278_9163478940520472116_n-e1750363122788.jpg',
        buttonText: 'Book Free Counseling',
        duration: 9
      },
      {
        id: 'ad2',
        type: 'text' as const,
        imageSize: 'medium' as const,
        title: 'IELTS NEW BATCH!',
        subtitle: 'Get expert guidance for your study abroad journey',
        buttonText: 'Learn More',
        duration: 9
      },
      {
        id: 'ad3',
        type: 'both' as const,
        imageSize: 'medium' as const,
        photoUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
        title: 'Start Your Journey Today!',
        subtitle: 'Join thousands of successful students',
        buttonText: 'Get Started',
        duration: 9
      }
    ]
  };

  // If ads are disabled, don't show anything
  if (!adSystemConfig.enabled) return null;

  const currentAd = adSystemConfig.ads[currentAdIndex];
  const hasMoreAds = currentAdIndex < adSystemConfig.ads.length - 1;

  useEffect(() => {
    if (adSystemConfig.ads.length > 0) {
      setIsVisible(true);
      const adDuration = currentAd?.duration || 6;
      setCountdown(adDuration);
      
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAdComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentAdIndex]);

  const handleAdComplete = () => {
    if (adSystemConfig.showSequentially && hasMoreAds) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentAdIndex(prev => prev + 1);
      }, adSystemConfig.delayBetweenAds);
    } else {
      setIsVisible(false);
    }
  };

  const handleClose = () => {
    if (adSystemConfig.showSequentially && hasMoreAds) {
      handleAdComplete();
    } else {
      setIsVisible(false);
    }
  };

  const handleBookNow = () => {
    window.open('https://calendly.com/shankaredumnr/30min', '_blank');
    if (adSystemConfig.showSequentially && hasMoreAds) {
      handleAdComplete();
    } else {
      setIsVisible(false);
    }
  };

  // Updated image handling for full-size images
  const getImageClasses = (ad: AdConfig) => {
    if (ad.imageSize === 'full') {
      return 'w-full max-h-[80vh] object-contain';
    }
    
    switch (ad.imageSize) {
      case 'small': return 'w-full h-24 object-cover rounded-lg mb-3';
      case 'medium': return 'w-full h-32 object-cover rounded-lg mb-4';
      default: return 'w-full h-48 object-cover rounded-lg mb-4';
    }
  };

  if (!isVisible || !currentAd) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
      <div className={`bg-white rounded-lg shadow-2xl max-w-md w-full relative overflow-hidden ${
        currentAd.imageSize === 'full' ? 'max-w-4xl' : ''
      }`}>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full transition-colors z-10 shadow-md"
        >
          <X className="h-5 w-5 text-gray-800" />
        </button>
        
        {adSystemConfig.ads.length > 1 && (
          <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
            {currentAdIndex + 1} of {adSystemConfig.ads.length}
          </div>
        )}
        
        <div className={currentAd.imageSize === 'full' ? '' : 'p-6'}>
          {currentAd.type === 'image' && currentAd.photoUrl ? (
            <div className="flex flex-col">
              {/* Full image without borders */}
              <img 
                src={currentAd.photoUrl} 
                alt="Study Abroad Ad" 
                className={getImageClasses(currentAd)}
              />
              
              {/* Content below image */}
              <div className="p-6">
                <div className="text-center text-sm text-gray-500 mb-4">
                  Auto-closing in {countdown} seconds
                </div>
                <button
                  onClick={handleBookNow}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  {currentAd.buttonText}
                </button>
              </div>
            </div>
          ) : currentAd.type === 'text' ? (
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold mb-2">{currentAd.title}</h3>
                <p className="text-red-100">{currentAd.subtitle}</p>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                Auto-closing in {countdown} seconds
              </div>
              <button
                onClick={handleBookNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {currentAd.buttonText}
              </button>
            </div>
          ) : currentAd.type === 'both' ? (
            <div className="text-center">
              {currentAd.photoUrl && (
                <img 
                  src={currentAd.photoUrl} 
                  alt="Study Abroad Ad" 
                  className={getImageClasses(currentAd)}
                />
              )}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold mb-2">{currentAd.title}</h3>
                <p className="text-blue-100">{currentAd.subtitle}</p>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                Auto-closing in {countdown} seconds
              </div>
              <button
                onClick={handleBookNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {currentAd.buttonText}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PopupAd;
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page Not Found 😕</p>
        <p className="text-xl text-gray-550 mb-4">📞 Need help? Call us at: Dhangadhi: 9809426441 || Mahendranagar: 9763318884</p>
        <p className="text-xl text-gray-610 mb-4">🔍 Don’t worry — we’re here to help you get back on track.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

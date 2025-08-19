
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MessageFromFounder from "./pages/MessageFromFounder";
import Members from "./pages/Members";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Testimonials from "./pages/Testimonials";
import FreeCounseling from "./pages/FreeCounseling";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import SouthKorea from "./pages/destinations/SouthKorea";
import Canada from "./pages/destinations/Canada";
import Japan from "./pages/destinations/Japan";
import USA from "./pages/destinations/USA";
import Australia from "./pages/destinations/Australia";
import UK from "./pages/destinations/UK";
import China from "./pages/destinations/China";
import Malta from "./pages/destinations/Malta";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/message-from-founder" element={<MessageFromFounder />} />
          <Route path="/members" element={<Members />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/south-korea" element={<SouthKorea />} />
          <Route path="/destinations/canada" element={<Canada />} />
          <Route path="/destinations/japan" element={<Japan />} />
          <Route path="/destinations/usa" element={<USA />} />
          <Route path="/destinations/australia" element={<Australia />} />
          <Route path="/destinations/uk" element={<UK />} />
          <Route path="/destinations/china" element={<China />} />
          <Route path="/destinations/malta" element={<Malta />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/counseling" element={<FreeCounseling />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

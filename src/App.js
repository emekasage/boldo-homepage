import Blog from "./components/sections/Blog";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Newsletter from "./components/sections/Newsletter";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Work from "./components/sections/Work";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Work />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

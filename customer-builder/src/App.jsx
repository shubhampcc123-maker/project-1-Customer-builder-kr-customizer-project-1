import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import WayCustomer from "./Components/WayCustomer/WayCustomer";
import ProductDetail from "./Components/Product/ProductDetail";
import Item from "./Components/Items/Item";
import Blog from "./Components/Blog/Blog";
import ProductItem from "./Components/ProductItem/ProductItem";
import DiffrentCard from "./Components/DiffrentCard.jsx/DiffrentCard";
import Globe from "./Components/Globe/Globe";
import LongTerm from "./Components/LongTerm/LongTerm";
import CTA from "./Components/CTA/CTA.jsx";
import FAQ from "./Components/FAQ/FAQ.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WayCustomer />
      <ProductDetail />
      <Item />
      <Blog />
      <ProductItem />
      <DiffrentCard />
      <Globe />
      <LongTerm />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

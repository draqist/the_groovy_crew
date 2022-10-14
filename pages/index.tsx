import type { NextPage } from "next";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import ProductSlide from "../components/ProductSlide";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSlide/>
      <Hero />
    </div>
  );
};

export default Home;

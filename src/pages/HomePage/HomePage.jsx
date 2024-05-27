import "./HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../../components/slider/Sliders";
import BrandList from "../../components/brands/BrandList";
import ProductList from "../../components/products/ProductList";
const Home = () => {
  return (
    <div className="home-page">
      <Sliders />
      <BrandList />
      <ProductList />
      <BrandList />
    </div>
  );
};

export default Home;

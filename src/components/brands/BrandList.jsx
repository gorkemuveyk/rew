import Slider from "react-slick";
import BrandItem from "./BrandItem";
import { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import brands from "../../constant/brands.json";

const BrandList = () => {
  const ref = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const next = () => {
    ref.current.slickNext();
  };
  const prev = () => {
    ref.current.slickPrev();
  };

  return (
    <div className="my-5 w-11/12 mx-auto p-2 relative">
      <h3 className="text-3xl border-b border-orange-500 inline p-2 ">
        Üreticilerimiz
      </h3>
      <Slider {...settings} ref={ref} className="my-5 p-2">
        {brands.map((brand, i) => (
          <BrandItem key={i} img={brand.image} name={brand.name} />
        ))}
      </Slider>
      <div className="w-full bg-red-400">
        <button
          className="absolute top-1/2 sm:-left-10 md:-left-5 -left-1 border border-orange-500 p-2 rounded-md opacity-60 hover:opacity-100 transition-opacity"
          onClick={prev}
        >
          <GrPrevious />
        </button>
        <button
          className="absolute top-1/2 sm:-right-10 md:-right-5 -right-1 border border-orange-500 p-2 rounded-md opacity-60 hover:opacity-100 transition-opacity"
          onClick={next}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default BrandList;

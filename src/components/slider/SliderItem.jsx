import PropType from "prop-types";

const SliderItem = ({ img, title, desc }) => {
  return (
    <div className=" !flex sm:flex-row flex-col justify-center items-center gap-2 p-8 w-full">
      <img src={img} className="sm:w-1/2 w-full" alt="" />
      <div className="ml-5  select-text">
        <h3 className="sm:text-6xl text-4xl text-orange-500 my-2 ">{title}</h3>
        <p className="sm:text-lg ">{desc}</p>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.defaultProps = {
  img: "images/slider3.png",
  title: "Moda İç Çamaşırı",
  desc: "Kadın iç çamaşırı koleksiyonumuzda bulunan son trendler. Yumuşak ve nefes alabilir kumaşı ile gün boyu rahatlık sağlar. Şık ve modern tasarımı ile göz alıcı bir görünüm sunar. Ayarlanabilir askıları ve esnek yapısı ile mükemmel bir uyum sağlar.",
};

SliderItem.propTypes = {
  img: PropType.string.isRequired,
  title: PropType.string.isRequired,
  desc: PropType.string.isRequired,
};

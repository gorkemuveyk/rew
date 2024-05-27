import PropType from "prop-types";
const BrandItem = ({ img, name }) => {
  return (
    <div className="mx-auto w-32 h-[105px]">
      <img src={img} className="w-full" alt="" />
      <h3 className="text-orange-500 text-center">{name}</h3>
    </div>
  );
};

export default BrandItem;

BrandItem.defaultProps = {
  name: "Tefal",
  img: "images/tefal.jpeg",
};

BrandItem.propTypes = {
  img: PropType.string,
  name: PropType.string,
};

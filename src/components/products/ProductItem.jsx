import PropType from "prop-types";
import { useEffect } from "react";
import { BsBasket3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/slices/basketSlice";

const ProductItem = ({ product }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector("input[type=search]").value = "";
  });
  const dispatch = useDispatch();
  return (
    <div
      className="p-2 my-5 w-full relative cursor-pointer flex flex-col shadow-sm"
      title={product.description}
    >
      <img
        src={`/images/${product.image}`}
        className="sm:h-[300px] sm:w-[300px] sm:mx-auto lg:h-[350px] w-[200px] h-[200px] mx-auto"
      />
      <div className="info">
        <span className="absolute top-1 right-1 bg-red-500 p-1 rounded-md text-white">
          {product.badge == "For You" ? "Yeni" : "İndirim"}
        </span>
        <h3 className="text-xl">{product.name}</h3>
        <p className="truncate border-b border-orange-500 py-1">
          {product.description}
        </p>
        <div className="flex justify-around mt-2">
          <span className="bg-orange-600 p-1 rounded-md text-white">
            {product.price} TL
          </span>
          <span className=" p-1 rounded-md text-green-500">
            <BsBasket3Fill
              onClick={() => dispatch(addBasket(product))}
              size={24}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.defaultProps = {
  product: [
    {
      name: "not found",
      description: "not-found",
      badge: "not-found",
      price: "not-found",
    },
  ],
};

ProductItem.propTypes = {
  product: PropType.any,
};

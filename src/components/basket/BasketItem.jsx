import { MdDelete } from "react-icons/md";
import PropType from "prop-types";
import { useDispatch } from "react-redux";
import {
  addSingle,
  destroySingle,
  removeBasket,
} from "../../redux/slices/basketSlice";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`p-5 rounded-md w-full flex justify-around items-center gap-5 flex-wrap border-b `}
      id={`c-${product.id}`}
    >
      <img
        src={`/images/${product.image}`}
        alt=""
        className="md:h-60 md:w-54 w-56"
      />
      <div className="flex flex-col md:w-1/4 flex-wrap w-full">
        <h2 className="text-lg w-full  block">{product.name}</h2>
        <p className="text-xs">
          <span className="text-green-500 ">Hızlı Kargo</span> 3 iş günü
          içerisinde teslim
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-red-500 text-center">Son Ürün!</p>
        <div className="flex justify-center items-center gap-2">
          <button
            className="p-2 border border-orange-500 w-6 h-6 flex items-center justify-center text-orange-500"
            onClick={() => dispatch(removeBasket(product))}
          >
            -
          </button>
          <span className={`c-${product.id}`}>{product.quantity}</span>
          <button
            onClick={() => dispatch(addSingle(product))}
            className="p-2 border border-orange-500 w-6 h-6 flex items-center justify-center text-orange-500"
          >
            +
          </button>
        </div>
      </div>

      <span className="text-orange-500 text-lg text-center">
        {product.price} TL
      </span>

      <MdDelete
        size={30}
        onClick={() => dispatch(destroySingle(product))}
        className="text-red-500 cursor-pointer flex-shrink-0"
      />
    </div>
  );
};

export default BasketItem;

BasketItem.propTypes = {
  product: PropType.any,
};

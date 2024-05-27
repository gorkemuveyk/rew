import { useEffect } from "react";
import BasketInfo from "./BasketInfo";
import BasketItem from "./BasketItem";
import "./BasketList.css";
import { useSelector } from "react-redux";

const BasketList = () => {
  var keys = Object.keys(localStorage);
  const basketItem = useSelector((state) => state.basket.count);
  useEffect(() => {}, [basketItem]);
  return (
    <div className="basket-list">
      {localStorage.length > 0 ? (
        <div className="w-full p-2 flex flex-col justify-between items-center md:flex-row">
          <div className="md:w-3/5 w-full p-2 shadow overflow-y-auto max-h-full md:max-h-[700px] ">
            <h3 className="text-3xl text-orange-500 p-2 mb-3">Sepetin</h3>
            {keys.map((key) => {
              let product = JSON.parse(localStorage.getItem(key));
              return <BasketItem product={product} key={product.id} />;
            })}
          </div>
          <div className="md:w-2/5 w-full mx-auto ">
            <BasketInfo />
          </div>
        </div>
      ) : (
        <div className="not-found flex flex-col gap-4 justify-center">
          <p className="text-8xl font-bold text-orange-500 text-center">0</p>
          <div>
            <h3 className="text-4xl text-center text-orange-500">Sepet Boş</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketList;

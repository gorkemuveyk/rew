import { useDispatch } from "react-redux";
import { destoryBasket } from "../../redux/slices/basketSlice";

const BasketInfo = () => {
  const dispatch = useDispatch();
  const keys = Object.keys(localStorage);
  let totalProduct = 0,
    cargo = 30,
    total = 0;

  keys.map((key) => {
    const tempData = JSON.parse(localStorage.getItem(key));
    totalProduct += tempData.price * tempData.quantity;
  });
  total = totalProduct - cargo;
  return (
    <div className="flex flex-col p-2 gap-5 rounded">
      <a
        className="bg-orange-500 text-white p-2 rounded text-center cursor-pointer"
        href="/siparis-ver"
      >
        Siparişi Tamamla
      </a>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-start text-xl my-4 w-full">Sipariş Özeti</h1>
        <div className="flex flex-row justify-between p-3 w-full items-center border-b">
          <p>Ürün Fiyat</p>
          <span className="text-orange-400 font-bold text-xl">
            {totalProduct} TL
          </span>
        </div>
        <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
          <p>Kargo</p>
          <span className="text-orange-400 font-bold text-xl">{cargo} TL</span>
        </div>
        <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
          <p>Bu ürün ücretsiz kargo</p>
          <span className="text-orange-400 font-bold text-xl">-{cargo} TL</span>
        </div>
        <div className=" border-b flex flex-row justify-between p-3 w-full items-center">
          <p>Ödenecek Tutar</p>
          <span className="text-orange-400 font-bold text-xl">
            {total + cargo} TL
          </span>
        </div>
        <div className="flex justify-between w-full  items-center">
          <input
            className="w-full p-2 rounded m-2 border border-orange-500 outline-none"
            type="text"
            placeholder="İndirim kodunuz varsa girin"
          />
          <button className="w-full bg-orange-500 rounded p-2 text-white">
            İndirim Uygula
          </button>
        </div>
      </div>
      <a
        className="bg-orange-500 text-white p-2 rounded text-center cursor-pointer"
        href="/siparis-ver"
      >
        Siparişi Tamamla
      </a>
    </div>
  );
};

export default BasketInfo;

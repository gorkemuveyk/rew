import ProductItem from "./ProductItem";
import products from "../../constant/products.json";
import { Link } from "react-router-dom";
const ProductList = () => {
  return (
    <div className="my-5 p-2 w-11/12 mx-auto flex items-center flex-wrap">
      <h3 className="w-full text-3xl p-2 my-2 text-orange-600">
        Yeni Çıkanlar
      </h3>
      <>
        {products.map((product) => {
          if (product.badge === "For You") {
            return (
              <Link
                key={product.id}
                to={`/product-detail/${product.id}`}
                className="sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/5 w-full"
              >
                <ProductItem product={product} />
              </Link>
            );
          }
        })}
      </>

      <h3 className="w-full text-3xl p-2 my-10 text-orange-600">
        İndirimli Ürünler
      </h3>
      <>
        {products.map((product) => {
          if (product.badge === "Hot" || product.badge === "New") {
            return (
              <Link
                key={product.id}
                to={`/product-detail/${product.id}`}
                className="sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/5 w-full"
              >
                <ProductItem product={product} />
              </Link>
            );
          }
        })}
      </>
    </div>
  );
};

export default ProductList;

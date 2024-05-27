import { Outlet } from "react-router-dom";
const ProductDetailsLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Outlet />
    </div>
  );
};

export default ProductDetailsLayout;

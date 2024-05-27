import { MdDoneAll } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowToast } from "../../redux/slices/basketSlice";

const ToastMessage = () => {
  const dispatch = useDispatch();
  const showToast = useSelector((state) => state.basket.showToast);

  useEffect(() => {
    if (showToast) {
      const timeoutId = setTimeout(() => {
        document.querySelector(".toast-message").classList.add("hidden");
        dispatch(setShowToast(false));
      }, 3000);

      return () => clearTimeout(timeoutId); // Temizleme işlemi, bileşen unmount olduğunda çalışır
    }
  }, [showToast, dispatch]);

  return (
    <motion.div
      animate={{ x: -10 }}
      className="absolute bottom-4 z-50 right-4 toast-message bg-green-500 p-3 rounded-md text-white flex justify-center items-center gap-2"
    >
      Sipariş eklendi Sepetine Git <MdDoneAll />
    </motion.div>
  );
};

export default ToastMessage;

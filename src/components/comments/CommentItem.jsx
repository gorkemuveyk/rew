import { FaStar } from "react-icons/fa";
const CommentItem = ({ yorum, tarih }) => {
  return (
    <div className="md:w-2/5 w-full flex justify-between items-center p-3 rounded-md relative my-5 shadow-md mx-5">
      <img src="/images/user.png" className="w-[50px]" alt="" />
      <div className="comment w-full p-2">
        <p>{yorum}</p>
        <div className="date absolute -top-1 right-1 p-0 text text-black/50">
          {tarih}
        </div>
        <div className="stars absolute bottom-1 right-1 p-1 text text-black/50">
          <div className="flex">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

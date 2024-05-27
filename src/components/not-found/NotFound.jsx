import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found flex flex-col gap-4 justify-center">
      <p className="text-8xl font-bold text-orange-500 text-center">404</p>
      <div>
        <h3 className="text-4xl text-center text-orange-500">
          Aradığın sayfa bulunamadı
        </h3>
      </div>
    </div>
  );
};

export default NotFound;

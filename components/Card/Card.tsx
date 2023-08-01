const Card = ({
  title,
  showSub,
  background,
  imgUrl,
  children,
  btn_bg,
  clickFun,
}: any) => {
  
  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col md:flex-row md:max-w-xl rounded-lg ${background} shadow-lg`}
      >
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={imgUrl}
        />
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          {showSub && (
            <p className="text-gray-500 text-sm mt-2">
              This is the card subtitle
            </p>
          )}
          <p className="text-gray-700 text-base mt-4 mb-4">{children}</p>

          <button
            type="button"
            onClick={clickFun}
            className={`inline-block px-6 py-2.5 ${btn_bg} text-white font-medium text-xs uppercase rounded shadow-md`}
          >
            Some action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

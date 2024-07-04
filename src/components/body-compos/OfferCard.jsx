const OfferCard = (props) => {
  const { cardInfo } = props;
  return (
    <div className="">
      <div className="container mx-auto ">
        <div className="max-w-[400px] flex flex-col shadow-2xl pb-10 rounded-2xl">
          <div className="flex justify-center pt-4 rounded-2xl transition ease-in-out hover:scale-110 duration-500">
            <img src={cardInfo.image} alt=""  className="p-4"/>
          </div>

          <div className=" text-xs px-5 my-5">{cardInfo.type}</div>

          <div className=" flex  justify-between px-5">
            <div className="text-xl font-semibold">
              <h1>{cardInfo.title}</h1>
            </div>
            <div className="flex gap-x-2 items-center">
              <span>
                <img src={cardInfo.vector} alt="" className="w-4 h-4" />
              </span>
              <span>{cardInfo.peopls}</span>
            </div>
          </div>

          <div className="text-xs px-5 mt-3">
            <p>{cardInfo.descriptions}</p>
          </div>

          <div className="flex justify-center w-full px-5 mt-8">
            <div className="text-xs">
              <span className="font-bold text-2xl">${cardInfo.price}</span>
              /night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

import adults from "../../assets/bookings/adults.svg";
import child from "../../assets/bookings/child.svg";

const BookingPannel = () => {
  return (
    <div className=" bg-white  py-14">
      <div className="container mx-auto  flex justify-center  max-w-[1194px] ">
        <div className=" rounded-3xl bg-[#E9F3F6] px-2 sm:px-4 py-12">
          <div className=" flex flex-col items-center mb-10">
            <h1 className="text-2xl">Book a Room</h1>
            <p className="text-[#5E5E5E] dark:text-">
              Discover the perfect space for you!
            </p>
          </div>
          <div className="flex justify-center">
            <div className=" flex flex-col gap-y-8 md:flex-row  items-end gap-x-4 ">
              <div className=" flex flex-col sm:flex-row items-center gap-y-6">
                {/* check in date */}
                <div className="max-w-[250px] flex flex-col gap-y-2 items-center justify-items-center sm:items-start  px-2 xs:px-4 mt-2">
                  <h1>Date</h1>
                  <div className="">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="  rounded-xl px-4 py-2 border "
                    />
                  </div>
                </div>

                {/* presome */}
                <div className="max-w-[400px] flex flex-col gap-y-2 items-center sm:items-start ">
                  <h1>Person</h1>
                  <div className=" bg-white flex items-center gap-x-2 xs:gap-x-16  py-2 rounded-2xl px-4 mt-2">
                    <div className="adult-select">
                      <div className=" flex gap-x-7 items-center">
                        <div className=" flex items-center gap-x-3">
                          <img
                            src={adults}
                            alt="adults"
                            className="w-5 h-5  adult-logo"
                          />
                          <h1>Adults</h1>
                        </div>
                        <div className="">
                          <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className=" child-select flex flex-col gap-y-2">
                      <div className=" flex gap-x-7 items-center">
                        <div className=" flex items-center gap-x-3">
                          <img src={child} alt="adults" className="  child-logo w-5 h-5  " />
                          <h1>Childrens</h1>
                        </div>
                        <div className="">
                          <select>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* presone end */}
              </div>
              {/* buttons */}
              <div className="flex justify-center md:justify-start w-full max-h-10 md:mb-1">
                <button className="bg-[#65AEF2] text-white text-xl px-7 py-1 rounded-xl  transition ease-in-out hover:scale-110 duration-500">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingPannel;

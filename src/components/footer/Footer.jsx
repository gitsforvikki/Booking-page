import logo from "../../assets/logo-footer.svg";

const Footer = () => {
  const footerItems = [
    "About us",
    "FAQ",
    "Services & Facilities",
    "Contact",
    "Term of Use",
    "Careers",
    "Location",
    "Privacy Policy",
    "How to book",
  ];

  return (
    <div className="bg-[#1E1E1E]">
      <div className="container mx-auto  py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 mx-4">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-y-7">
              <h1 className="text-white text-2xl font-semibold">
                Newsletter & Special Promo
              </h1>
              <div className=" ">
                <input
                  className="py-3 outline-none px-3 rounded-xl"
                  type="text"
                  placeholder="Enter your email address"
                />
                <button className="bg-[#65AEF2] text-white  px-5 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4  md:gap-y-6 lg:gap-y-8 ">
            <div className="text-white flex w-full justify-center">
              <img src={logo} alt="" className="w-16 h-16 lg:w-20 lg:h-20" />
            </div>
            <div className="">
              <div className=" grid grid-cols-2 md:grid-cols-3 justify-items-center md:justify-items-start">
                {footerItems.map((item, index) => {
                  return (
                    <div key={index} className="text-white">
                      <p className="text-xs">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center w-full  mt-10">
          <h1 className="text-gray-400 text-xs border-t border-dashed border-gray-700 py-2">© Copyright Booking Hotels. All right reserved.</h1>
        </div>
      </div>
    </div>
  );
};
export default Footer;

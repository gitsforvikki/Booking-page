import logo from "../../assets/logo.svg";

const Navbar = () => {
 
  return (
    <>
    <div className="bg-white rounded-xl max-w-[1194px]  w-full py-1 opacity-80 hidden md:block mx-16">
      <ul className="flex gap-x-8 items-center justify-evenly  ">
        <li className="text-hover-effect text-[#65AEF2]">Home</li>
        <li className="text-hover-effect">About</li>
        <li className=" text-hover-effect">Newsletter</li>
        <li>
          <img src={logo} alt="" className="w-14 h-14" />
        </li>
        <li className="text-hover-effect">Rooms</li>
        <li className="text-hover-effect">Services</li>
        <li className="text-hover-effect">Pricing</li>
      </ul>
    </div>
   
    </>
  );
};

export default Navbar;

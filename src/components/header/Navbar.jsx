import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-gray-300 rounded-xl max-w-[1194px]  w-full py-1">
      <ul className="flex gap-x-8 items-center justify-evenly  ">
        <li className="text-[#65AEF2]">Home</li>
        <li>About</li>
        <li>Newsletter</li>
        <li>
          <img src={logo} alt=""  className="w-14 h-14"/>
        </li>
        <li>Rooms</li>
        <li>Services</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
};

export default Navbar;

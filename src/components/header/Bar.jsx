import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { useState } from "react";

const Bar = (props) => {
  const [isVisible, setVisibile] = useState(false);
  return (
    <div className="md:hidden  relative w-11/12  opacity-80">
      <div className=" bg-white rounded-lg">
        <div className="flex w-full justify-between px-8 items-center">
          <div className="">
            <img src={logo} alt="logo" className="w-14 h-14" />
          </div>
          <div className=" flex">
            {!isVisible ? (
              <img
                src={menu}
                alt="menu"
                className="w-12 h-12"
                onClick={props.handlevisible}
              />
            ) : (
              <img src={close} alt="close" className="w-12 h-12"  onClick={props.handlevisible} />
            )}
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default Bar;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/dashboard/Image1.svg";
import image2 from "../../assets/dashboard/image2.svg";
import Bar from "./Bar";
import Navbar from "./Navbar";

function Dashboard(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };
  return (
    <div className="relative overflow-hidden z-10">
      <Slider {...settings}>
        <div>
          <img
            src={image1}
            alt="main image"
            className="lg:h-[658px] md:h-[500px] h-[450px] w-full object-cover"
          />
        </div>
        <div>
          <img
            src={image2}
            alt="main image"
            className="lg:h-[658px] md:h-[500px] h-[450px] w-full object-cover"
          />
        </div>
      </Slider>
      <div className="absolute top-5 w-full flex justify-center ">
        <Navbar />
        <Bar handlevisible={props.onhandleClick} />
      </div>
      <div className="dashboard-title">
        <h1>Discover Extraordinary Comfort in Hotels</h1>
      </div>
    </div>
  );
}

export default Dashboard;

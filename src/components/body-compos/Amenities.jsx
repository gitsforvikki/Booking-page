import room from "../../assets/amenity/room.svg";
import dining from "../../assets/amenity/dining.svg";
import facility from "../../assets/amenity/facility.svg";
import meeting from "../../assets/amenity/meeting.svg";
import wedding from "../../assets/amenity/wedding.svg";

function Amenities() {
  return (
    <div className="container mx-auto my-14">
      <div className=" flex flex-col lg:flex-row gap-4 max-w-[1440px] justify-center  ">
        <div className="relative flex flex-col items-center">
          <img src={room} alt="room" className="max-w-[400px] max-h[760px] w-full  transition ease-in-out hover:scale-105 duration-500" />
          <h1 className=" title text-3xl"> Rooms</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="relative">
              <img
                src={dining}
                alt="dining"
                className="max-w-[400px] max-h[360px]  w-full translation ease-in-out hover:scale-105 duration-500 "
              />
              <h1 className=" title text-3xl"> Dining</h1>
            </div>
            <div className="relative">
              <img
                src={meeting}
                alt="meeting & conference"
                className="max-w-[400px] max-h[360px] w-full translation ease-in-out hover:scale-105 duration-500"
              />
              <h1 className=" title text-3xl"> Conferences & Meetings</h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative ">
              <img
                src={facility}
                alt="ficiity & service"
                className="max-w-[400px] max-h[360px] w-full translation ease-in-out hover:scale-105 duration-500"
              />{" "}
              <h1 className=" title text-3xl"> Service & Facilities</h1>
            </div>
            <div className="relative">
              <img
                src={wedding}
                alt="wedding & service"
                className="max-w-[400px] max-h[360px] w-full translation ease-in-out hover:scale-105 duration-500"
              />{" "}
              <h1 className=" title text-3xl">Wedding and Package</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Amenities;

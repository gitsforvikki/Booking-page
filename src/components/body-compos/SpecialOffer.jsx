import honeymoon from "../../assets/SpecialOffer/haneymoon.svg";
import dining from "../../assets/SpecialOffer/dining.svg";
import meeting from "../../assets/SpecialOffer/meeting.svg";
import man from "../../assets/SpecialOffer/man.svg";
import OfferCard from "./OfferCard";

const SpecialOffer = () => {
  const offerData = [
    {
      image: honeymoon,
      vector: man,
      title: "Honeymoon",
      type: "Room",
      peopls: 2,
      price: 699,
      descriptions: "Indulge in a Memorable One-Time Romantic Dinner for Two",
    },
    {
      image: meeting,
      vector: man,
      title: "Meetings",
      type: "Room",
      peopls: 30,
      price: 999,
      descriptions:
        "Experience an Exclusively Private Environment to Boost Your Productivity",
    },
    {
      image: dining,
      vector: man,
      title: "Romantic Dining",
      type: "Dining",
      peopls: 2,
      price: 499,
      descriptions: "Indulge in a Memorable One-Time Romantic Dinner for Two",
    },
  ];

  return (
    <div className="bg-white  py-14">
    <div className="container mx-auto flex flex-col  ">
      {/* Heading text */}
      <div className=" flex justify-between items-center w-full mb-8">
        <div className=" flex flex-col gap-y-4  sm:w-4/5 ">
          <div className="">
            <h1 className="text-hover-effect text-[#65AEF2] text-xl inline-block">Special Offers</h1>
          </div>
          <div className="">
            <h1 className=" text-3xl sm:text-4xl">Best offer of the month</h1>
          </div>
          <div className="">
            <p className="">
              Experience Fantastic Benefits and Obtain Better Rates When You
              Make a Direct Booking on Our Official Website
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <h1 className="text-hover-effect text-[#65AEF2] text-lg font-semibold  ">View All</h1>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-col sm:flex-row justify-evenly gap-x-4  ">
        {offerData.map((each) => {
          return <OfferCard cardInfo={each}  />;
        })}
      </div>
    </div>
    </div>
  );
};
export default SpecialOffer;

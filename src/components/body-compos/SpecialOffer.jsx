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
    <div className="container mx-auto flex flex-col gap-y-10  mt-16">
      {/* Heading text */}
      <div className=" flex justify-between items-center">
        <div className=" flex flex-col gap-y-4 w-4/5">
          <div className="">
            <h1 className="text-[#65AEF2] text-xl">Special Offers</h1>
          </div>
          <div className="">
            <h1 className="text-4xl">Best offer of the month</h1>
          </div>
          <div className="">
            <p>
              Experience Fantastic Benefits and Obtain Better Rates When You
              Make a Direct Booking on Our Official Website
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="text-[#65AEF2] text-lg font-semibold">View All</h1>
        </div>
      </div>
      {/* cards */}
      <div className="flex justify-evenly ">
        {offerData.map((each) => {
          return <OfferCard cardInfo={each} />;
        })}
      </div>
    </div>
  );
};
export default SpecialOffer;

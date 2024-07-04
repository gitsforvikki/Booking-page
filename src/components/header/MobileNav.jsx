function MobileNav() {
  return (
    <div className="md:hidden mx-10">
      <div className=" mt-2 opacity-95">
        <ul className=" flex flex-col gap-y-1 bg-white rounded-md py-6">
          <li className="nav-list-item text-[#65AEF2]">Home</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Newsletter</li>
          <li className="nav-list-item">Rooms</li>
          <li className="nav-list-item">Service</li>
          <li className="nav-list-item">Pricing</li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;

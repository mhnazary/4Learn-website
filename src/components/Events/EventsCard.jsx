function EventsCard({ Image, title, date, eventText }) {
    return (
      <div className="mb-56 relative -mt-24 ">
        <div className="overflow-hidden group">
        <img src={Image} alt="" className="h-96 transition-transform transform scale-100 group-hover:scale-110 duration-300 hover:cursor-pointer" />
        </div>
        <div className="bg-[#fff] shadow-md w-[500px] -mt-12 ml-8 flex flex-col justify-center items-center text-center px-4 py-6 absolute z-0">
          <h3 className="font-raleway font-semibold text-2xl text-[#37423b] hover:text-green hover:cursor-pointer">
            {title}
          </h3>
          <p className="italic py-3">{date}</p>
          <p className="text-[16px] text-justify text-[#5e5e5e]">{eventText}</p>
        </div>
      </div>
    );
  }
  
  export default EventsCard;
  
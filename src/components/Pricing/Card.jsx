function Card({ catagory, value }) {
  return (
    <>
      <div className=" shadow-md w-64 flex flex-col items-center">
        <div className="px-[15px] py-[20px] bg-[#f8f8f8] text-center w-full font-raleway font-bold text-[#777777]">
          {catagory}
        </div>
        <h4 className="py-5 text-center text-[36px] font-extrabold text-green">
          <sup>$</sup> {value}{" "}
          <span className="text-xl text-[16px] font-poppins text-[#BABABA] font-thin">
            /month
          </span>
        </h4>
        <p className="py-2 text-[#444444] font-sans">Aida dere</p>
        <p className="py-2 text-[#444444] font-sans">Nec feugiat nisl</p>
        <p className="py-2 text-[#444444] font-sans">Nulla at volutpat dola</p>
        <p className="py-2 text-[#444444] font-sans">Pharetra massa</p>
        <p className="py-2 text-[#CCCCCC] font-sans line-through">
          Massa ultricies mi
        </p>
        <div className="px-[15px] py-[20px] bg-[#f8f8f8] text-center w-full">
          <button className="py-2 px-8 bg-green rounded-3xl text-white text-[14px] font-raleway font-bold">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
}

function GreenCard({ catagory, value }) {
  return (
    <>
      <div className=" shadow-md w-64 flex flex-col items-center">
        <div className="px-[15px] py-[20px] bg-green text-center w-full text-white font-raleway font-bold">
          {catagory}
        </div>
        <h4 className="py-5 text-center text-[36px] font-extrabold text-green">
          <sup>$</sup> {value}{" "}
          <span className="text-xl text-[16px] font-poppins text-[#BABABA] font-thin">
            /month
          </span>
        </h4>
        <p className="py-2 text-[#444444] font-sans">Aida dere</p>
        <p className="py-2 text-[#444444] font-sans">Nec feugiat nisl</p>
        <p className="py-2 text-[#444444] font-sans">Nulla at volutpat dola</p>
        <p className="py-2 text-[#CCCCCC] font-sans line-through">Pharetra massa</p>
        <p className="py-2 text-[#CCCCCC] font-sans line-through">
          Massa ultricies mi
        </p>
        <div className="px-[15px] py-[20px] bg-[#f8f8f8] text-center w-full">
          <button className="py-2 px-8 bg-green rounded-3xl text-white text-[14px] font-raleway font-bold">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
}

export { Card, GreenCard };

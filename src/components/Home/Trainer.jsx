function Trainer({ img, trainer, category, text, ticon, ficon, iicon, licon }) {
  return (
    <div className="border border-gray-300 w-[365px]">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col text-center justify-center px-2">
        <p className="text-[18px] font-600 font-raleway mt-5">{trainer}</p>
        <p className="italic text-[13] text-gray-600 mb-3">{category}</p>
        <p className="italic text-[14px] text-[#aaaaaa]">{text}</p>
        <div className="flex justify-center my-4 mb-8 text-xl space-x-1 text-[#848282]">
          <p className=" hover:text-green hover:cursor-pointer">{ticon}</p>
          <p className=" hover:text-green hover:cursor-pointer">{ficon}</p>
          <p className=" hover:text-green hover:cursor-pointer">{iicon}</p>
          <p className=" hover:text-green hover:cursor-pointer">{licon}</p>
        </div>
      </div>
    </div>
  );
}

export default Trainer;

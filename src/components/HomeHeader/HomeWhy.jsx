import { TbNotes } from "react-icons/tb"; 
import { BsFillBoxSeamFill } from "react-icons/bs";
import { PiImagesSquare } from "react-icons/pi";

function HomeWhy() {
  return (
    <div className="flex px-14 my-14 space-x-8">
      <div className="bg-[#5fcf80] w-[90%] rounded-md">
        <div className="px-8 py-10">
          <h2 className="text-white font-raleway text-[34px] font-bold leading-10">
            Why Choose Mentor?
          </h2>
          <p className="text-white my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur
            quia eos. Autem tempore quibusdam vel necessitatibus optio ad
            corporis.
          </p>
          <div className="flex justify-center items-center">
          <button className="text-center text-white  rounded-2xl px-7 py-[6px] bg-[#80e09b] hover:bg-white hover:text-green duration-500">Learn More ▶</button>
        </div>
        </div>
      </div>
      <div className="flex py-10 space-x-6">
        <div className="border rounded-sm flex flex-col justify-center items-center">
          <div className="bg-[#e8f3ea] h-16 w-16 flex justify-center items-center rounded-[50%]">
            <TbNotes size={25}/>
          </div>
          <h3 className="my-10 font-raleway text-[24px] px-5 font-semibold leading-7 text-center">Corporis voluptates sit</h3>
          <p className=" text-center text-gray-500 px-5">
            Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
            nisi ut aliquip
          </p>
        </div>
        <div className="border rounded-sm flex flex-col justify-center items-center">
        <div className="bg-[#e8f3ea] h-16 w-16 flex justify-center items-center rounded-[50%]">
        <BsFillBoxSeamFill size={25}/>
          </div>
          <h3 className="my-10 font-raleway text-[24px] px-5 font-semibold leading-7 text-center">Ullamco laboris ladore pan</h3>
          <p className=" text-center text-gray-500 px-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt
          </p>
        </div>
        <div className="border rounded-sm flex flex-col justify-center items-center">
        <div className="bg-[#e8f3ea] h-16 w-16 flex justify-center items-center rounded-[50%]">
        <PiImagesSquare size={25}/>
          </div>
          <h3 className="my-10 font-raleway text-[24px] px-5 font-semibold leading-7 text-center">Labore consequatur</h3>
          <p className=" text-center text-gray-500 px-5">
            Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores
            omnis facere
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeWhy;

import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function CoursesCard({ image, category, price, title, text, Trainer, TrainerName, ProfNum, likeNum }) {
  return (
    <div className="-mt-24">
      <div className="border border-gray-300 w-[365px]">
        <div>
          <img className="w-full" src={image} alt="" />
        </div>
        <div>
          <div className="px-4">
            <div className="flex justify-between mt-4">
              <p className="bg-green px-3 py-1 text-white font-raleway">{category}</p>
              <p className="font-bold">{price}</p>
            </div>
            <h4 className="font-raleway text-[22px] font-600 mt-2 hover:cursor-pointer hover:text-green">{title}</h4>
            <p className="text-[#777777] text-[14px]">{text}</p>
            <div className="border-t-2 mt-3 flex justify-between">
              <div className="flex items-center py-3 space-x-2">
                <img className="h-12 rounded-[50%]" src={Trainer} alt="" />
                <p className="font-semibold font-raleway text-[#5a6c60]">{TrainerName}</p>
              </div>
              <div className="flex space-x-3 text-[#5a6c60]">
                <div className="flex items-center space-x-1">
                  <p><IoPersonOutline /></p>
                  <p>{ProfNum}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <p><CiHeart /></p>
                  <p>{likeNum}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;

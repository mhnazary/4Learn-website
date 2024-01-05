import { FaSkype, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="px-14 bg-[#f9faf9]">
        <div className="flex py-16">
          <div className="w-[28%]">
            <h3 className="font-raleway font-semibold text-[#444444] text-2xl">
              Mentor
            </h3>
            <div className="text-[14px] text-[#777777]">
              <p className="py-5 ">
                A108 Adam Street
                <br /> New York, NY 535022
                <br /> United States
              </p>
              <p>
                <span className="font-bold">Phone: </span>
                <span>+1 5589 55488 55</span>
              </p>
              <span className="font-bold">Email: </span>
              <span>info@example.com</span>
            </div>
          </div>
          <div className="w-[20%] space-y-3">
            <h3 className="font-raleway text-[16px] font-bold text-[#444444]">
              Useful Links
            </h3>
            <ul className="space-y-3 text-[#777777] text-[14px]">
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Home
              </li>
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> About us
              </li>
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Services
              </li>
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Terms of service
              </li>
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Privacy policy
              </li>
            </ul>
          </div>
          <div className="w-[20%] space-y-3">
            <h3 className="font-raleway text-[16px] font-bold text-[#444444]">
              Our Services
            </h3>
            <ul className="space-y-3 text-[#777777] text-[14px]">
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Web Design
              </li>
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Web Development
              </li>
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Product Management
              </li>
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Marketing
              </li>
              <li className="hover:text-green hover:cursor-pointer duration-500">
                <span className="text-green">➤</span> Graphic Design
              </li>
            </ul>
          </div>
          <div className="w-[32%] space-y-3">
            <h3 className="font-raleway text-[16px] font-bold text-[#444444]">
              Join Our Newsletter
            </h3>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <div className="py-2 w-full">
              <input
                type="text"
                className="rounded-2xl py-1 px-2 h-10 w-[300px] outline-none"
              />
              <button className="bg-[#5fcf80] text-white -ml-12 py-2 px-4 hover:bg-[#55c274] rounded-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between bg-[#ebeceb] py-5 px-14">
          <div>
            <p className="text-[#5e5c5c] text-[14px] py-2">
              © Copyright <strong>Mentor</strong> . All Rights Reserved
            </p>
            <p className="text-[#5e5c5c] text-[14px]">
              Designed by
              <span className="text-[#5fcf80] hover:text-[#6ae18e] duration-700 cursor-pointer font-600"> Hafiz Rasa & Hossain Nazary</span>
            </p>
          </div>
          <div className="flex space-x-3">
            <ul className="flex space-x-1 justify-center items-center">
              <li className="bg-[#5fcf80] rounded-[50%] h-10 w-10 flex justify-center items-center text-white hover:bg-[#409157] hover:cursor-pointer duration-700">
                <FaTwitter />
              </li>
              <li className="bg-[#5fcf80] rounded-[50%] h-10 w-10 flex justify-center items-center text-white hover:bg-[#409157] hover:cursor-pointer duration-700">
                <FaFacebook />
              </li>
              <li className="bg-[#5fcf80] rounded-[50%] h-10 w-10 flex justify-center items-center text-white hover:bg-[#409157] hover:cursor-pointer duration-700">
                <FaInstagram />
              </li>
              <li className="bg-[#5fcf80] rounded-[50%] h-10 w-10 flex justify-center items-center text-white hover:bg-[#409157] hover:cursor-pointer duration-700">
                <FaSkype />
              </li>
              <li className="bg-[#5fcf80] rounded-[50%] h-10 w-10 flex justify-center items-center text-white hover:bg-[#409157] hover:cursor-pointer duration-700">
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <>
      <div>
        <div className="w-full flex justify-start items-center px-7 mb-12">
          <span className="h-12 w-12 bg-[#ecf9f0] text-green text-xl text-center pt-2 rounded-full hover:bg-green hover:text-white">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <div className="ml-4">
            <h1 className="text-[22px] font-raleway font-bold">Location:</h1>
            <p className="text-[14px] font-raleway text-[#657a6d]">
              A108 Adam Street, New York, NY 535022
            </p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center px-6 mb-12">
          <span className="h-12 w-12 bg-[#ecf9f0] text-green text-xl text-center pt-2 rounded-full hover:bg-green hover:text-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <div className="ml-4">
            <h1 className="text-[22px] font-raleway font-bold">Email:</h1>
            <p className="text-[16px] font-raleway text-[#657a6d]">
              info@example.com
            </p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center px-6 mb-12">
          <span className="h-12 w-12 bg-[#ecf9f0] text-green text-xl text-center pt-2 rounded-full hover:bg-green hover:text-white">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <div className="ml-4">
            <h1 className="text-[22px] font-raleway font-bold">Call:</h1>
            <p className="text-[14px] font-raleway text-[#657a6d]">
              +93 777 211 662
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

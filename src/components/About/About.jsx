import AboutImg from '../../assets/images/about.jpg';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function HomeInfo() {
  return (
    <div >
    <div className="flex py-16 px-14 space-x-10">
        <div className="text-[#444444] font-500">
           <h2 className="mt-1 font-raleway text-2xl font-semibold ">Pleasures worthy are provided as if the body's pleasures are to be assumed.</h2>
          
           <p className="font-sans text-[15px] italic mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iste! Eaque exercitationem.
           </p>

          <ul className='mt-6'>
            <li className="flex space-x-2">
              <IoIosCheckmarkCircleOutline className='text-green' size={25}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex space-x-2 my-3">
              <IoIosCheckmarkCircleOutline className='text-green' size={25}/>
              <p>Velit ratione magnam quisquam hic odio, perferendis sunt</p>
            </li>
            <li className="flex space-x-2">
              <IoIosCheckmarkCircleOutline className='text-green' size={25}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
          <p className='mt-6'>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="">
            <img src={AboutImg} alt="" />
        </div>
        </div>
    </div>
  );
}

export default HomeInfo;
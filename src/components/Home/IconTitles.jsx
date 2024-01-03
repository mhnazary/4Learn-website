import IconTitle from "./IconTitle";
import { CiShop } from "react-icons/ci";
import { MdOutlineAnalytics } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { PiPaintBrushBroadFill } from "react-icons/pi";

function IconTitles() {
  return (
    <div className="mb-6">
      <div className="flex px-14 justify-between ">
        <IconTitle
          title="Lorem Ipsum"
          icon={<CiShop />}
          iconColorClass="text-yellow-500"
        />
        <IconTitle
          title="Dolor Sitema"
          icon={<MdOutlineAnalytics />}
          iconColorClass="text-blue-500"
        />
        <IconTitle
          title="Sed perspiciatis"
          icon={<CiShop />}
          iconColorClass="text-red-500"
        />
        <IconTitle
          title="Magni Dolores"
          icon={<PiPaintBrushBroadFill />}
          iconColorClass="text-[#ed00fc]"
        />
      </div>
      <div className="flex px-14 justify-between my-6">
        <IconTitle
          title="Nemo Enim"
          icon={<CiShop />}
          iconColorClass="text-blue-500"
        />
        <IconTitle
          title="Eiusmod Tempor"
          icon={<MdOutlineAnalytics />}
          iconColorClass="text-orange-500"
        />
        <IconTitle
          title="Midela Teren"
          icon={<SlCalender />}
          iconColorClass="text-[#00fca8]"
        />
        <IconTitle
          title="Pira Neve"
          icon={<PiPaintBrushBroadFill />}
          iconColorClass="text-[#0c00fc]"
        />
      </div>
      <div className="flex px-14 justify-between ">
        <IconTitle
          title="Dirada Pack"
          icon={<SlCalender />}
          iconColorClass="text-[#fc7a00]"
        />
        <IconTitle
          title="Moton Ideal"
          icon={<MdOutlineAnalytics />}
          iconColorClass="text-[#fc0088]"
        />
        <IconTitle
          title="Verdo Park"
          icon={<SlCalender />}
          iconColorClass="text-[#df1b1b"
        />
        <IconTitle
          title="Flavor Nivelanda"
          icon={<PiPaintBrushBroadFill />}
          iconColorClass="text-[#04ed1b]"
        />
      </div>
    </div>
  );
}

export default IconTitles;

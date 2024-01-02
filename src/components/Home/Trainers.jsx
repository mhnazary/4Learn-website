import Trainer1 from "../../assets/images/trainer-1.jpg";
import Trainer2 from "../../assets/images/trainer-2.jpg";
import Trainer3 from "../../assets/images/trainer-3.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import Trainer from "./Trainer";
function Trainers() {
  return (
    <div className="flex space-x-[32px] px-14 my-32">
      <Trainer
        img={Trainer1}
        trainer="Walter White"
        category="Web Development"
        text="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"
        ticon={<FaTwitter />}
        ficon={<FaFacebook />}
        iicon={<FaInstagram />}
        licon={<FaLinkedin />}
      />
      <Trainer
        img={Trainer2}
        trainer="Walter White"
        category="Web Development"
        text="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"
        ticon={<FaTwitter />}
        ficon={<FaFacebook />}
        iicon={<FaInstagram />}
        licon={<FaLinkedin />}
      />
      <Trainer
        img={Trainer3}
        trainer="Walter White"
        category="Web Development"
        text="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"
        ticon={<FaTwitter />}
        ficon={<FaFacebook />}
        iicon={<FaInstagram />}
        licon={<FaLinkedin />}
      />
    </div>
  );
}

export default Trainers;

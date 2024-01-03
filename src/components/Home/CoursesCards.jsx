import CoursesCard from "./CoursesCard";
import Course1 from "../../assets/images/course-1.jpg";
import Cuurse2 from "../../assets/images/course-2.jpg";
import Course3 from "../../assets/images/course-3.jpg";
import Trainer1 from "../../assets/images/trainer-1.jpg";
import Trainer2 from "../../assets/images/trainer-2.jpg";
import Trainer3 from "../../assets/images/trainer-3.jpg";


function CouresesCards() {
  return (
    <div className="flex justify-between px-14">
      <CoursesCard
        image={Course1}
        category="Web Development"
        price="$169"
        title="Website Design"
        text="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
        Trainer={Trainer1}
        TrainerName="Antonio"
        ProfNum={50}
        likeNum={65}
      />
      <CoursesCard
        image={Cuurse2}
        category="Marketing"
        price="$250"
        title="Search Engine Optimization"
        text="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
        Trainer={Trainer2}
        TrainerName="Lana"
        ProfNum={35}
        likeNum={42}
      />
      <CoursesCard
        image={Course3}
        category="Content"
        price="$180"
        title="Copywriting"
        text="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
        Trainer={Trainer3}
        TrainerName="Brandon"
        ProfNum={20}
        likeNum={85}
      />
    </div>
  );
}

export default CouresesCards;

import {Card, GreenCard} from "./Card";

function Cards() {
  return (
    <>
      <div className="w-full py-[60px] flex justify-evenly">
        <Card catagory='Free' value='0'/>
        <GreenCard catagory='Business' value='19'/>
        <Card catagory='Developer' value='29'/>
        <Card catagory='Ultimate' value='49'/>
      </div>
    </>
  );
}

export default Cards;

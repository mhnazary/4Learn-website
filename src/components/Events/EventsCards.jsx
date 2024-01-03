import EventsCard from "./EventsCard";
import Event1 from "../../assets/images/events-1.jpg";
import Event2 from "../../assets/images/events-2.jpg";

function EventsCards() {
  return (
    <div className="flex px-14 space-x-6">
      <EventsCard
        Image={Event1}
        title="Introduction to webdesign"
        date="Sunday, September 26th at 7:00 pm"
        eventText="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
      <EventsCard
        Image={Event2}
        title="Marketing Strategies"
        date="Sunday, November 15th at 7:00 pm"
        eventText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
      />
    </div>
  );
}

export default EventsCards;

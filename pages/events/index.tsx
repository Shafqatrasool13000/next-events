import { useRouter } from "next/router";
import EventItem from "../../components/events/event-item";
import EventsList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const events = getAllEvents();
  const router=useRouter();

  const onSearch=(year:number,month:number) => {
    const fullPath=`/events/${year}/${month}`;
    console.log({onSearch});

    router.push(fullPath);
  }
  return (
    <>
      <EventSearch onSearch={onSearch} />
     <EventsList features={events}/>
    </>
  );
};

export default EventsPage;

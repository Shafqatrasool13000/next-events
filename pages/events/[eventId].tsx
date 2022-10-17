import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import {
  getEventById,
  getEvents,
  getFeaturedEvents,
} from "../../helpers/api-utils";

const EventDetails = ({ event }: any) => {
  if (!event) {
    return (
      <div className="center">
        <p>Loading ...</p>
      </div>
    );
  }
  return (
    <>
      <EventSummary />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imagAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const event = await getEventById(context.params.eventId);
  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: "blocking",
    revalidate: 300,
  };
};

export default EventDetails;

import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById } from "../../dummy-data";

const EventDetails = () => {
  const { query } = useRouter();
  const event = getEventById(query?.eventId);
  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No Event Found!</p>
        </ErrorAlert>
        <div className="center">

        <Button link="/">Show All Events</Button>
        </div>
      </>
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

export default EventDetails;

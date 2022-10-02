import { useRouter } from "next/router";
import React from "react";
import EventItem from "../../components/events/event-item";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const { query } = useRouter();

  if (!query.filterevents) {
    return <p>Loading ...</p>;
  }
  const year = +query?.filterevents[0];
  const month = +query?.filterevents[1];

  if (isNaN(year) || isNaN(month) || year > 2023 || month < 1 || month > 12) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter fomats</p>
        </ErrorAlert>
      </>
    );
  }

  const filteredEvent = getFilteredEvents({ year, month });

  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Event found</p>
        </ErrorAlert>
        <div className="center">

        <Button link="/">Show All Event</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month-1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList features={filteredEvent}/>
    </>
  );
};

export default FilteredEventsPage;

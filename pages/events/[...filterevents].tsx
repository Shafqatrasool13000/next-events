import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import EventItem from "../../components/events/event-item";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { events } from "../../helpers/urls";

const FilteredEventsPage = () => {
  const [loadedEvents, setLoadedEvents] = useState<any>();
  const { query } = useRouter();

  const fetcher = async () => {
    const { data } = await axios.get(events);
    console.log({ data }, "data by axios");
    return data;
  };
  const { data, error } = useSWR(events, fetcher);
  useEffect(() => {
    const finalData = [];
    for (const key in data) {
      finalData.push({
        id: key,
        ...data[key],
      });
    }
    setLoadedEvents(finalData);
  }, [data]);
  console.log({ loadedEvents });

  if (!query.filterevents || !loadedEvents) {
    return <p>Loading ...</p>;
  }
  const year = +query?.filterevents[0];
  const month = +query?.filterevents[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2023 ||
    month < 1 ||
    month > 12 ||
    error
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter fomats</p>
        </ErrorAlert>
      </>
    );
  }

  const filteredEvents = loadedEvents.filter((event: any) => {
    const eventDate = new Date(event.date);
    console.log(eventDate.getMonth(), "get-month");
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
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

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList features={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;

// export const getServerSideProps = async (context: any) => {
//   const year = +context.params?.filterevents[0];
//   const month = +context.params?.filterevents[1];

//   if (isNaN(year) || isNaN(month) || year > 2023 || month < 1 || month > 12) {
//     return {
//       props: {
//         hasError: true,
//       },
//     };
//   }

//   const filteredEvents = getFilteredEvents({ year, month });

//   return {
//     props: {
//       filteredEvents,
//       date: {
//         month,
//         year,
//       },
//     },
//   };
// };

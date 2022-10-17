import { events as eventUrl } from "./urls";

export const getEvents = async () => {
  const result = await fetch(eventUrl);
  const events = await result.json();
  const finalData = [];
  for (const key in events) {
    finalData.push({
      id: key,
      ...events[key],
    });
  }
  return finalData;
};

export const getFeaturedEvents = async () => {
  const events = await getEvents();
  console.log(events.filter((event) => event.isFeatured, "isFeatured events"));
  return events.filter((event) => event.isFeatured);
};

export const getEventById = async (
  id: number | string | undefined | string[]
) => {
  const events = await getEvents();
  return events.find((event) => event.id === id);
};

export const getFilteredEvents = async ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  const events = await getEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

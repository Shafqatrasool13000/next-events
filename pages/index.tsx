import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import EventsList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

const Homepage = ({ featureEvents }: any) => {
  return (
    <>
      <EventsList features={featureEvents} />
    </>
  );
};

export const getStaticProps = async () => {
  const featureEvents = await getFeaturedEvents();
  return {
    props: {
      featureEvents,
      revalidate: 60,
    },
  };
};

export default Homepage;

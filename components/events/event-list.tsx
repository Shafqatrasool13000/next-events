import React from "react";
import { EventsListProps } from "../../utils/Type";
import EventItem from "./event-item";
import classes from './event-list.module.css';

const EventsList = ({ features }:EventsListProps) => {
  return (
      <ul className={classes.list}>
        {features.map((feature, index:number) => (
          <EventItem key={index} feature={feature} />
        ))}
      </ul>
  );
};

export default EventsList;

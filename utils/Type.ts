import React from "react";

export interface EventType {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}
export interface EventsListProps {
  features: EventType[];
}

export interface EventProps{
    feature:EventType
}

export interface ButtonProps{
  children:React.ReactNode,
  link:string
}
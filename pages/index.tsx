import React from 'react'
import EventsList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data'

const Homepage = () => {
    const featuredEvents=getFeaturedEvents();
  return (
    <>
        <EventsList features={featuredEvents}/>
    </>
  )
}

export default Homepage
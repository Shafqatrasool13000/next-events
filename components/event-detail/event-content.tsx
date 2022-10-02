import classes from './event-content.module.css';
import React from 'react';
function EventContent(props:any) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;

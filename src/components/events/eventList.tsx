import { NextComponentType, NextPage } from "next";
import EventItem from "./event-item";
import { EventData } from "../../types/props";
import css from "./event-list.module.css";

const EventList = ({ items }: { items: EventData[] }) => {
  return (
    <ul className={css.list}>
      {items.map((event: EventData) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;

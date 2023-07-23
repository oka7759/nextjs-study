import { NextPage } from "next";
import { getAllEvents } from "../../../dummy-data";
import EventList from "@/components/events/eventList";
import EventsSearch from "@/components/events/eventsSearch";
import { useRouter } from "next/router";

const AllEventPage: NextPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  function searchEvent(year: string | undefined, month: string | undefined) {
    const fullPath = `/event/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch searchEvent={searchEvent} />
      <EventList items={events}></EventList>
    </div>
  );
};

export default AllEventPage;

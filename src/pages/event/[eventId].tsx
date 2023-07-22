import { NextPage } from "next";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { GetEvent } from "../../types/props";

const EventDetailPage: NextPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event: GetEvent | undefined = getEventById(eventId);

  if (!event) {
    return <p>이벤트 없음</p>;
  }

  console.log(event.description);

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};
export default EventDetailPage;

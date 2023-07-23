import { NextPage } from "next";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "@/components/events/eventList";
import ResultTitle from "@/components/events/results-title";

interface Props {}

const FillteredEventPage: NextPage<Props> = ({}) => {
  const router = useRouter();
  const target = router.query.slug;
  console.log(target);
  if (!target) {
    return <p className="center">...loading</p>;
  }

  const year = target[0];
  const month = target[1];

  const numYear = +year;
  const numMonth = +month;
  console.log(numYear, numMonth);

  const fillteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  const date = new Date(numYear, numMonth - 1);

  console.log(fillteredEvent);
  return (
    <div>
      <ResultTitle date={date} />
      <EventList items={fillteredEvent} />
    </div>
  );
};

export default FillteredEventPage;

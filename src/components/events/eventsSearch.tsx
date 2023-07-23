import { NextComponentType, NextPage } from "next";
import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";

type EventsSearchProps = {
  searchEvent: (
    selectedYear: string | undefined,
    selectedMonth: string | undefined
  ) => void;
};

const EventsSearch = ({ searchEvent }: EventsSearchProps) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);
  function submitHandler(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    searchEvent(selectedYear, selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">1월</option>
            <option value="2">2월</option>
            <option value="3">3월</option>
            <option value="4">4월</option>
            <option value="5">5월</option>
            <option value="6">6월</option>
            <option value="7">7월</option>
            <option value="8">8월</option>
            <option value="9">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
          </select>
        </div>
      </div>
      <Button>찾기 이벤트</Button>
    </form>
  );
};

export default EventsSearch;

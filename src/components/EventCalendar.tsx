import { IEvent } from "@src/models/IEvent";
import { formatDate } from "@src/utils/date";
import { Calendar } from "antd";
import { Moment } from "moment";
import { FC } from "react";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};
export default EventCalendar;

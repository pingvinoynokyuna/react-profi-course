import { Badge, Calendar } from 'antd'
import { IEvent } from '../models/IEvent'
import { Dayjs } from 'dayjs';
import { formatDate } from '../utils/date';

type EventCalendarProps = {
  events: IEvent[];
}

export const EventCalendar = ({ events }: EventCalendarProps) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value)
    const currentDayEvents = events.filter(ev => ev.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    )
  }

  return (
    <Calendar dateCellRender={dateCellRender} />
  )
}
import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'

type EventCalendarProps = {
  events: IEvent[];
}

export const EventCalendar = ({ events }: EventCalendarProps) => {
  return (
    <Calendar />
  )
}
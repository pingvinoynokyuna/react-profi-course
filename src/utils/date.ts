import { Dayjs } from "dayjs";

export const formatDate = (date: Dayjs): string => {
    return date.format('YYYY.MM.DD');
}
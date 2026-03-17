import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);

export const rules = {
    required: (message: string = "Обязательное поле!") => ({
        required: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Dayjs) {
            if (dayjs(value).isAfter(dayjs(), 'day')) {
                return Promise.resolve()
            }

            return Promise.reject(new Error(message));
        }
    })
}
import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import { rules } from "../utils/rules"
import { IUser } from "../models/IUser"
import { IEvent } from "../models/IEvent";
import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import { formatDate } from "../utils/date";
import { useTypedSelector } from "../hooks/useTypedSelector";


interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void,
}

export const EventForm = ({ guests, submit }: EventFormProps) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: '',
    });

    const { user } = useTypedSelector(state => state.auth);

    const guestOptions = guests.map((guest, id) => ({
        label: guest.username,
        value: guest.username,
    }));

    useEffect(() => {
        setEvent({ ...event, author: user.username });
    }, [user]);

    const selectDate = (date: Dayjs): void => {
        setEvent({ ...event, date: formatDate(date) });
    }

    const submitForm = () => {
        submit(event);
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Название события"
                name="description"
                rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
            >
                <Input
                    onChange={(e) => setEvent({ ...event, description: e.target.value })}
                    value={event.description} />
            </Form.Item>

            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required('Пожалуйста, введите имя пользователя!'), rules.isDateAfter('Нельзя создать событие в прошлом!')]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>

            <Form.Item
                label="Выберети гостя"
                name="guest"
                rules={[rules.required('Пожалуйста, введите гостя!')]}
            >
                <Select options={guestOptions} onChange={(guest: string) => setEvent({ ...event, guest })} />
            </Form.Item>

            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType='submit'>
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

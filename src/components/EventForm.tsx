import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import { rules } from "../utils/rules"

export const EventForm = () => {
    return (
        <Form>
            <Form.Item
                label="Название события"
                name="description"
                rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
            >
                <Select>

                </Select>
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

import { Button, Form, Input } from 'antd'
import { rules } from '../utils/rules'

export const LoginForm = () => {
    const submit = () => {

    }
    return (
        <Form
            onFinish={submit}
        >
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста, введите пароль!')]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit'>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

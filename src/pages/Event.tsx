import { Button, Layout, Modal, Row } from 'antd'
import { FC, useState } from 'react'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm';

export const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Layout>
            <EventCalendar events={[]} />
            <Row justify="center">
                <Button
                    onClick={() => setModalVisible(true)}
                >Добавить событие</Button>
            </Row>
            <Modal
                title="Добавить событие"
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm />

            </Modal>
        </Layout>
    )
}

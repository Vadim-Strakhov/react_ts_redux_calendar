import EventCalendar from "@src/components/EventCalendar";
import EventForm from "@src/components/EventForm";
import { useActions } from "@src/hooks/useActions";
import { useTypedSelector } from "@src/hooks/useTypedSelector";
import { IEvent } from "@src/models/IEvent";
import { Button, Layout, Modal, Row } from "antd";
import { FC, useEffect, useState } from "react";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();

  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };

  return (
    <Layout>
      {/* <div>{JSON.stringify(events)}</div> */}
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        open={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};
export default Event;

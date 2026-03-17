import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionsEnum } from "./types";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setGuests: (guests: IUser[]) => ({ type: EventActionsEnum.SET_GUESTS, payload: guests }),
    setEvents: (events: IEvent[]) => ({ type: EventActionsEnum.SET_EVENTS, payload: events }),
    fetchGuests: () => async (disptch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            disptch(EventActionCreators.setGuests(response.data));
        } catch (e) {
            console.log(e);
        }
    },
    createEvent: (event: IEvent) => async (disptch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]';
            const json = JSON.parse(events) as IEvent[];
            const newJson = [...json, event];

            disptch(EventActionCreators.setEvents(newJson));
            localStorage.setItem('events', JSON.stringify(newJson));
        } catch (e) {
            console.log(e);
        }
    },
    fetchEvents: (username: string) => async (disptch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]';
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);

            disptch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {
            console.log(e);
        }
    }
}
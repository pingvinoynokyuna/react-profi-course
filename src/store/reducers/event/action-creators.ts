import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionsEnum } from "./types";


export const EventActionCreators = {
    setGuests: (guests: IUser[]) => ({ type: EventActionsEnum.SET_GUESTS, payload: guests }),
    setEvents: (events: IEvent[]) => ({ type: EventActionsEnum.SET_EVENTS, payload: events }),
    fetchGuests: () => async (disptch: AppDispatch) => {
        try {
            // const guests = axios.get<IUser[]>()
        } catch (e) {

        }
    }
}
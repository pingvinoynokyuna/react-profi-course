import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { authReducer } from "./reducers/auth";


const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk) as any);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
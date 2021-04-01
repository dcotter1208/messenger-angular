import { createReducer, on } from '@ngrx/store';
import { updateMessages, MessageActionTypes } from './messages.actions';
import { Message } from '../models/message';

export interface MessagesState {
  messages: Message[];
}

export const initialState: MessagesState = {
  messages: []
};

export const reducer = createReducer(
  initialState,
  on(updateMessages, (state: MessagesState, { messages }) => ({ ...state, messages: messages }))
);

export function messageReducer(state: any, action: any) {
  return reducer(state, action);
}

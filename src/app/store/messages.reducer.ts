import { createReducer, on } from '@ngrx/store';
import { updateMessages, MessageActionTypes } from './messages.actions';
import { Message } from '../models/message';

export const initialState: Message[] = [];

export const reducer = createReducer(initialState, on());

export function messageReducer(state: any, action: any) {
  return reducer(state, action);
}

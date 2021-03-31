import { createAction, props } from '@ngrx/store';
import { Message } from '../models/message';

export enum MessageActionTypes {
  UpdateMessages = '[Chat Component] UpdateMessages'
}

export const updateMessages = createAction(MessageActionTypes.UpdateMessages, props<{ messages: Message[] }>());

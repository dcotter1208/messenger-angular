import { Message } from '../models/message';
import { Conversation } from '../models/conversation';

export const messages: Message[] = [
  {
    text: 'Hey, this is message #1',
    conversationId: '12345',
    senderId: 'user1',
    createdAt: '1617213123360'
  },

  {
    text: 'Hey, this is message #2',
    conversationId: '12345',
    senderId: 'user2',
    createdAt: '1617213585861'
  },

  {
    text: 'Hey, this is message #3',
    conversationId: '12345',
    senderId: 'user2',
    createdAt: '1617213599748'
  },

  {
    text: 'Hey, this is message #4',
    conversationId: '12345',
    senderId: 'user1',
    createdAt: '1617213602490'
  },

  {
    text: 'Hey, this is message #5',
    conversationId: '12345',
    senderId: 'user1',
    createdAt: '1617213603725'
  },

  {
    text: 'Hey, this is message #6',
    conversationId: '12345',
    senderId: 'user2',
    createdAt: '1617213604734'
  }
];

export const conversations: Conversation[] = [
  {
    id: '12345',
    userIds: ['user1', 'user2'],
    createdAt: '1617214214606'
  }
];

import { Component, OnInit, Output } from '@angular/core';
import { messages } from 'src/app/utils/sampleData';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/models/message';
import { updateMessages } from 'src/app/store/messages.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Observable<Message[]>;

  updateMessages() {
    this.store.dispatch(updateMessages({ messages }));
  }

  constructor(private store: Store<{ messages: Message[] }>) {
    this.messages = store.select(state => state.messages['messages']);
  }

  ngOnInit(): void {
    this.updateMessages();
  }
}

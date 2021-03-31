import { Component, OnInit, Input } from '@angular/core';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  isCurrentUser = false;

  @Input() message;
  @Input() senderId;
  @Input() createdAt;

  constructor() {}

  ngOnInit(): void {
    this.isCurrentUser = this.senderId === 'user1';
  }
}

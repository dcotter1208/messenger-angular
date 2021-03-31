import { Component, OnInit, Output } from '@angular/core';
import { messages } from 'src/app/utils/sampleData';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages = messages;

  constructor() {}

  ngOnInit(): void {}
}

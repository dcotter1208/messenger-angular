import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
    });
  }
}

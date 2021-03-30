import { Component, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isMobile = true;

  updateMobileLayout = () => {
    const layoutChanges = this.breakpointObserver.observe([Breakpoints.Handset]);
    layoutChanges.subscribe(result => {
      this.isMobile = result.matches;
    });
  };

  constructor(public breakpointObserver: BreakpointObserver) {
    this.updateMobileLayout();
  }

  ngOnInit(): void {}
}

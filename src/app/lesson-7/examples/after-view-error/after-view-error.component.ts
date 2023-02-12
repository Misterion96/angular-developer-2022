import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-view-error',
  template: `
    <p>{{value}}</p>
  `,
  styleUrls: ['./after-view-error.component.css'],
})
export class AfterViewErrorComponent implements AfterViewInit {
  public value = 1;

  constructor(public zone: NgZone) {}
  ngAfterViewInit() {
    this.value = 2;
  }
}

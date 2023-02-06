import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.less']
})
export class NgContainerComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit(): void {
  }

}

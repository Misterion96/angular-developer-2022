import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.less']
})
export class NgTemplateComponent implements OnInit {
  public readonly array = new Array(5).fill('name')
  @ViewChild('templateRef')
  public readonly templateRef: TemplateRef<any> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

    public onClick(): void {

    }
}

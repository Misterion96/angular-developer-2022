import { Component, Inject, Injector, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.css'],
})
export class NgComponentOutletComponent implements OnInit {
  constructor(private readonly injector: Injector) {}
  private readonly userName = 'not unknown asdasd';
  ngOnInit() {}

  public readonly myComponent = DynamicComponent;
  public readonly myInjector = Injector.create({
    parent: this.injector,
    providers: [
      {
        provide: 'userName',
        useValue: this.userName,
      },
    ],
  });
}

@Component({
  selector: 'dynamic-component',
  template: 'hello user <strong>{{userName}}</strong>',
})
export class DynamicComponent {
  constructor(
    @Inject('userName')
    public readonly userName: string
  ) {}
}

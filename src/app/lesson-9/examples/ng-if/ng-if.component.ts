import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  private readonly emptyArray = [];
  private readonly notEmptyArray = ['sasdasd'];

  constructor() {}

  ngOnInit() {}

  public readonly someArray = this.emptyArray;
  public readonly loadingState$ = of(null).pipe(
    delay(3000),
    map(() => true),
    startWith(false)
  );

  public getSomeValue(): string | number | object {
    return 'asdasdasd';
  }
}

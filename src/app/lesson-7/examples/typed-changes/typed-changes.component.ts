import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Inputs {
  someValu213123123e: string;
}

interface TypedSimpleChange<T> {
  currentValue: T;
  previousValue: T;
  firstChange;
}

type TypedSimpleChanges<T> = {
  [key in keyof T]: TypedSimpleChange<T[key]>;
};

@Component({
  selector: 'app-typed-changes',
  templateUrl: './typed-changes.component.html',
  styleUrls: ['./typed-changes.component.css'],
})
export class TypedChangesComponent implements Inputs {
  @Input()
  public someValu213123123e = '';

  // ngOnChanges(changes: TypedSimpleChanges<Inputs>) {
  //   changes.someValu213123123e.
  // }
}

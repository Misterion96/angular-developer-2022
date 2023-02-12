import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { createMockTableData } from '../examples/setters/data.mock';
const STORAGE_KEY = 'tempInput';

@Component({
  selector: 'app-lifecycles',
  templateUrl: './lifecycles.component.html',
  styleUrls: ['./lifecycles.component.css'],
})
export class LifecyclesComponent implements AfterViewInit, AfterViewChecked {
  @ViewChildren('viewVar')
  public readonly viewField!: QueryList<ElementRef>;

  public readonly tableData = createMockTableData(300);

  public inputValue = '';

  public onChangeInput(): void {
    this.setTempValue(this.inputValue);
  }

  ngAfterViewInit() {
    this.viewField.changes.subscribe((r) => console.log(r.toArray()));
  }

  ngAfterViewChecked() {
    // console.log(this.viewField.toArray());
  }

  private getLastValue(): string {
    return localStorage.getItem(STORAGE_KEY);
  }

  private setTempValue(value: string): void {
    localStorage.setItem(STORAGE_KEY, value);
  }
}

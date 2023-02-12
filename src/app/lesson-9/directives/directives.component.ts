import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  private readonly stringArray = ['Alex Hughes', 'Igor Smith', 'Leo Messi'];
  private readonly objectArray = [
    { firstName: 'Alex', lastName: 'Hughes' },
    { firstName: 'Igor', lastName: 'Smith' },
    { firstName: 'Leo', lastName: 'Messi' },
  ];

  public readonly items = this.objectArray;

  public readonly gridArray = this.createArray(8);

  private createArray(length: number): null[] {
    return new Array(length).fill(null);
  }

  public show(item: any): void {
    console.log(item);
  }
}

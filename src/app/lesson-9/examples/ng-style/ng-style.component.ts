import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  private readonly interval$ = interval(2000).pipe(takeWhile((r) => r < 30));

  public styles = {
    'font-size.px': 10,
  };

  ngOnInit(): void {
    this.interval$.subscribe((r) => {
      this.createNewStyles(r);
    });
  }

  public mutateStyles(count: number): void {
    this.styles['font-size.px'] = (count + 10) * 1.5;
  }

  public createNewStyles(count: number): void {
    this.styles = {
      ['font-size.px']: (count + 10) * 1.5,
    };
  }
}

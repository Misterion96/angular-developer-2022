import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parsed-obs-json',
  templateUrl: './parsed-obs-json.component.html',
  styleUrls: ['./parsed-obs-json.component.less']
})
export class ParsedObsJsonComponent {
  @Input()
  public obs$: Observable<any>  = new Observable<any>()
}

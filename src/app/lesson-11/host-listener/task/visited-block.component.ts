import { Component } from '@angular/core';

@Component({
  selector: 'app-visited-block',
  templateUrl: './visited-block.component.html',
  styleUrls: ['./visited-block.component.less']
})
export class VisitedBlockComponent  {

  public backgroundColor = 'grey';

  onMouseEnter($event: MouseEvent): void {}
  onMouseLeave($event: MouseEvent): void {}
}

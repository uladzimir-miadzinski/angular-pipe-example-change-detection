import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent  {
  @Input() childNum: number;
  @Input() childMultiplier: number;
}
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  num = 3;
  multiplier = 1;

  increaseMultiplier() {
    this.multiplier++;
  }

  decreaseMultiplier() {
    this.multiplier--;
  }

  increaseNumber() {
    this.num++;
  }

  decreaseNumber() {
    this.num--;
  }
}

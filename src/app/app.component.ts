import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  num = 3;
  multiplier = 1;
  randomProp: number;

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

  multiply(a: number, b: number) {
    console.log('Call component function');
    return a * b;
  }

  changeRandomProp() {
    this.randomProp++;
  }
}

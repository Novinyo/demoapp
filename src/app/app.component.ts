import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  FirstNum = 0;
  SecondNum = 0;

  Result: Number = 0;
  constructor() {

  }

  Calculate (val1, val2) {
    this.Result = this.FirstNum + this.SecondNum;
  }
}

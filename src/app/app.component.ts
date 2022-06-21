import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  click = true;
  hidetext = 'hide';
  hide() {
    this.click = !this.click;
    if (this.click == false) {
      this.hidetext = 'show';
    } else if (this.click == true) {
      this.hidetext = 'hide';
    }
    return this.click;
  }
  rows = [
    {
      Name: 'Shikha',
      Lastname: 'Jaiswal',
      Zip: '433676',
      Phoneno: '7856029871',
    },
    {
      Name: 'Abhishek',
      Lastname: 'Maudiraj',
      Zip: '687366',
      Phoneno: '7856029871',
    },
    {
      Name: 'shambhavi',
      Lastname: 'Duggal',
      Zip: '982565',
      Phoneno: '7856029871',
    },
    {
      Name: 'Joysi',
      Lastname: 'Christien',
      Zip: '433676',
      Phoneno: '7856029871',
    },
    {
      Name: 'tom',
      Lastname: 'claon',
      Zip: '433676',
      Phoneno: '7856029871',
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age:any;
  showAge: any;


  ageCalculator() {
    if (this.age) {
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      console.log(this.showAge);

    }
  }

  username:any;
  email:any;
  showuser() {
    let username = (<HTMLInputElement>document.getElementById("username-in")).value;
    let email = (<HTMLInputElement>document.getElementById("email-in")).value;
  }
}

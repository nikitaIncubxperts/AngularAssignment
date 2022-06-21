import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age: any;
  showAge: any;

  ageCalculator() {
    if (this.age) {
      const convertAge = new Date(this.age);  //converted into indian std time
      console.log(convertAge);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime()); //present date(in second)-selected date(in second)
      console.log(timeDiff);
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365); //
      console.log(this.showAge);
    }
  }

  username: any;
  email: any;
  showuser() {
    let fname = (<HTMLInputElement>document.getElementById("fname-in")).value;
    let lname = (<HTMLInputElement>document.getElementById("lname-in")).value;
    let username = (<HTMLInputElement>document.getElementById("username-in")).value;
    let email = (<HTMLInputElement>document.getElementById("email-in")).value;
    let arr = [
      {
        fname, lname, username, email
      }
    ]
    console.log(arr);
    (<HTMLInputElement>document.getElementById("fname-in")).value = '';
    (<HTMLInputElement>document.getElementById("lname-in")).value = '';
    (<HTMLInputElement>document.getElementById("username-in")).value = '';
    (<HTMLInputElement>document.getElementById("email-in")).value = '';
  }
}

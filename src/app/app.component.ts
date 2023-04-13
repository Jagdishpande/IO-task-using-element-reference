import { Component } from '@angular/core';
import { Istd } from './shared/model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inputoutput2';
  stdArr:Array<Istd>=[{
    fname:"jhon",
    lname:"Doe",
    email:"jd@gmail.com",
    contact:85758455
  }]

  onStdUpdate(data:Istd){
    console.log(data)
    this.stdArr.push(data)
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/student';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  fnamevalue!:string;
  lnamevalue!:string;
  emailvalue!:string;
  contactvalue!:string;

  @Output() updateStdinfo: EventEmitter<Istd>= new EventEmitter<Istd>()

  constructor() { }

  ngOnInit(): void {
  }
  onStdadd(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
    let obj:Istd={
      fname:fname.value,
      lname:lname.value,
      email:email.value,
      contact:+contact.value
    }
    console.log(obj)
    this.updateStdinfo.emit(obj)
    fname.value="",
    lname.value="",
    email.value="",
    contact.value=""
  }
}

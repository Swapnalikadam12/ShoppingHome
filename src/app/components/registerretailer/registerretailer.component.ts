import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from "../custom-validator/password-checker";


@Component({
  selector: 'app-registerretailer',
  templateUrl: './registerretailer.component.html',
  styleUrls: ['./registerretailer.component.css']
})
export class RegisterretailerComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  //phoneregex : string = "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$";
  phoneregex = "^((\\+91-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      useremail : new FormControl('',[Validators.email, Validators.required]),
      username : new FormControl('',[Validators.required, Validators.minLength(5)]),
      userphone : new FormControl('',[Validators.required, Validators.pattern(this.phoneregex)]),
      userpassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      confuserpassword : new FormControl('',[Validators.required,Validators.minLength(6)])
     
    },{
      validators: PasswordChecker("userpassword", "confuserpassword"),
    })
  }

  get g(){
    return this.registerForm.controls;
  }

  doRegister(){

  }

}

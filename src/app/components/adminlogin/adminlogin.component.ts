import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      useremail : new FormControl('',[Validators.email, Validators.required]),
      userpassword : new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  get h(){
    return this.loginForm.controls;
  }

  doLogin(){

  }
}
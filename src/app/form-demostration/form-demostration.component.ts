import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Account} from './../core/models/Account.entity';

@Component({
  selector: 'app-form-demostration',
  templateUrl: './form-demostration.component.html',
  styleUrls: ['./form-demostration.component.css']
})
export class FormDemostrationComponent implements OnInit {
  registerForm : FormGroup;
  certificate: any;
  roles:any;

  constructor(
      private formBuiler : FormBuilder,
    ) {}

  ngOnInit() {
    this.registerForm = this.formBuiler.group({
      id:'',
      userName: '',
      firstName:'',
      lastName:'',
      gender:'',
      password:'',
      status:true,
      role:'',
      certificate:this.certificate
    })

    this.certificate = [
      {id: 'c1', name:'Cerfificate 1'},
      {id: 'c2', name:'Cerfificate 2'},
      {id: 'c3', name:'Cerfificate 3'}
    ]

    this.roles = [
      {id:'r1', name:'Supervisor'},
      {id:'r2', name:'Adminstrator'},
      {id:'r3', name:'Nomal User'}
    ]
  }

  save() {
    var account : Account = this.registerForm.value;
    console.log(account.userName);
    console.log(account.firstName);
    console.log(account.lastName);
    console.log(account.password);
  }
}

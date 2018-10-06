import { Component, OnInit } from '@angular/core';
import {User} from './../core/models/User';

@Component({
  selector: 'app-demo-data-binding',
  templateUrl: './demo-data-binding.component.html',
  styleUrls: ['./demo-data-binding.component.css']
})
export class DemoDataBindingComponent implements OnInit {
  user:User
  name:string="test"
  totalSalary:number;
  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

}

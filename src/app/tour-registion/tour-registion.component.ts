import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Tour} from './../core/models/Tour';

@Component({
  selector: 'app-tour-registion',
  templateUrl: './tour-registion.component.html',
  styleUrls: ['./tour-registion.component.css']
})
export class TourRegistionComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private formBuiler : FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuiler.group({
      // tour.name : new  Tour()
    })
  }
  tourSubmit(){
    var tour : Tour = this.registerForm.value;

    console.log(tour.name);
  }

}

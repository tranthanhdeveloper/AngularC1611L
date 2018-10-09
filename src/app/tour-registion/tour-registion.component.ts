import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TourOrder, Tour, MovingMethod } from "../core/models/TourOrder";

@Component({
  selector: "app-tour-registion",
  templateUrl: "./tour-registion.component.html",
  styleUrls: ["./tour-registion.component.css"]
})
export class TourRegistionComponent implements OnInit {
  tourList = [
    new Tour(1, "Hà Nội - Hạ Long", 6000000),
    new Tour(2, "Hà Nội - Hải Phòng", 5500000),
    new Tour(3, "Hà Nội - Điện Biên", 5500000),
    new Tour(4, "Huế - Bạch Mã – Đà Nẵng", 5000000),
    new Tour(5, "Nha Trang – Đà Lạt", 3000000),
    new Tour(6, "Buôn Mê Thuột – Gia Lai", 3500000),
    new Tour(7, "TP HCM – Phú Quốc", 4000000),
    new Tour(8, "TP HCM - Cần Thơ – Cà Mau", 4500000),
    new Tour(9, "TP HCM - Mỹ Tho", 3000000)
  ];

  movingMethodList = [
    new MovingMethod(1, "Máy bay"),
    new MovingMethod(2, "Tàu hỏa"),
    new MovingMethod(3, "Xe khách"),
    new MovingMethod(4, "Tau thủy"),
    new MovingMethod(5, "Xe máy")
  ];

  registerForm: FormGroup;
  constructor(private formBuiler: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuiler.group({
      tourname: this.tourList[0],
      beginDate: new Date(),
      movingMethod: this.movingMethodList[0],
      registeeAmount: 1,
      customerName: "",
      contactAddress: "",
      contactPhone: ""
    });
  }
  tourSubmit() {
    
  }
}

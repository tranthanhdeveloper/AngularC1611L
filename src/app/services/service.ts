import { Injectable } from "@angular/core";
import { Product } from "../core/models/Product";

@Injectable({
  providedIn: "root"
})
export class Service1 {
  constructor() {}

  sum(a: number, b: number): number {
    return a + b;
  }

  sub(a: number, b: number): number {
    return a - b;
  }
}

@Injectable({
  providedIn: "root"
})
export class Service2 {
  constructor(private service1: Service1) {}

  sum(a: number, b: number, c: number): number {
    return this.service1.sum(this.service1.sum(a, b), c);
  }
}

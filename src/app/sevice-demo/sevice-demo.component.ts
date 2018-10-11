import { Component, OnInit } from "@angular/core";
import { Service1, Service2} from "../services/service";
import { Product } from "../core/models/Product";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-sevice-demo",
  templateUrl: "./sevice-demo.component.html",
  styleUrls: ["./sevice-demo.component.css"]
})
export class SeviceDemoComponent implements OnInit {
  result1: number;
  result2: number;
  result3: number;
  productList: Product[];

  constructor(
    private service1: Service1,
    private service2: Service2,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.result1 = this.service1.sum(1, 3);
    this.result2 = this.service1.sub(10, 4);
    this.result3 = this.service2.sum(1, 5, 10);
    this.productService.findAllProduct().subscribe(products =>{this.productList = products});
  }

  searchProductByName(event){
      var productName = event.target.value;
      this.productService.findProductByName(productName).subscribe(products =>{this.productList = products});
  }
}

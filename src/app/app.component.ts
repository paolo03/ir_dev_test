import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ProductsService } from "./products/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ir-dev-test";
  product$: Observable<any[]>

  constructor(private productService: ProductsService) {
    this.product$ = this.productService.getProducts()
  }
}

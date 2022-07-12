import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./shared/models/product.model";
import { ProductsService } from "./shared/services/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ir-dev-test";
  product$: Observable<Product[]>

  constructor(private productService: ProductsService) {
    this.product$ = this.productService.getProducts() as Observable<Product[]>
  }
}

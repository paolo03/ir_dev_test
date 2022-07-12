import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Product } from "./shared/models/product.model";
import { ProductsService } from "./shared/services/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  title = "ir-dev-test";
  productBrands$: Observable<String[]>
  product$: Observable<Product[]>

  constructor(private productService: ProductsService) {
    this.product$ = this.productService.getProducts() as Observable<Product[]>
  }

  ngOnInit(): void {
    this.productBrands$ = this.product$
    .pipe(map(products => Array.from(new Set(products.map(
      (product) => product.brand)))
    ))

    
  }

 
}

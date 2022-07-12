import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
  filteredProducts$: Observable<Product[]>
  searchForm: FormGroup

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
        search: '',
    });
    this.product$ = this.productService.getProducts() as Observable<Product[]>
    this.filteredProducts$ = this.product$
  }

  ngOnInit(): void {
    this.productBrands$ = this.product$
    .pipe(map(products => Array.from(new Set(products.map(
      (product) => product.brand)))
    ))
  }


 
}

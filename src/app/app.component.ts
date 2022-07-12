import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
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
  stockFilter: String = "all"
  brandFilter: String

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
      ),tap((data)=> {
        this.brandFilter = data[0]
        this.filterProducts()
      }
    ))
  }

  filterStocks(quantity: number): boolean{
    if(this.stockFilter == 'in-stock'){
        return quantity > 0
    } else if(this.stockFilter == 'out-of-stock') {
        return quantity <= 0
    } else {
      return true
    }
  }

  filterProducts(){
    this.filteredProducts$ = this.product$.pipe(
      map(product => product.filter(product => product.brand === this.brandFilter &&  this.filterStocks(product.quantity) ))
    )
  }

  onChangeBrand(e: any) {
    this.brandFilter = e.target.value
    this.filterProducts()
  } 

  onChangeRadio(e: any) {
    this.stockFilter = e.target.value;
    this.filterProducts()
  } 
}

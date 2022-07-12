import { Component, Input } from "@angular/core";
import { Product } from "../shared/models/product.model";

@Component({
  selector: "products-table",
  templateUrl: "products-grid.component.html",
  styleUrls: ['./products-grid.component.css'],
  providers: []
})
export class ProductsGridComponent {
  @Input() products: any[] = [];


  myTrackingFn(index: number, value: Product){
    return value.id
  }
}



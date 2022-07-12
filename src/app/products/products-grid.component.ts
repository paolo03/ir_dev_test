import { Component, Input } from "@angular/core";

@Component({
  selector: "products-table",
  templateUrl: "products-grid.component.html",
  styleUrls: [],
  providers: []
})
export class ProductsGridComponent {
  @Input() products: any[] = []
}

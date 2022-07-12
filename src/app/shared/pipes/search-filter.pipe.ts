import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(
    value: Product[],
    search: string
  ): Product[] {
    if (value) {
      if(search.length >= 3 ){
        return value.filter((item)=> {
          return item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
        });
      } else {
        return value;
      }
    }
  }
}

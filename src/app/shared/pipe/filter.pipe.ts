import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search: string): Cocktail[] | null {
    if (search != undefined) {
      return cocktails.filter( c => c.name.toLowerCase().includes(search.toLowerCase()) );
    }
    return cocktails;
  }

}

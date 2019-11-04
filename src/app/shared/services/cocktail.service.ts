import { Injectable } from '@angular/core';
import { Cocktail } from "../models/cocktail.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails : BehaviorSubject<Cocktail[]> = new BehaviorSubject(
    [
      new Cocktail('Mojito', 'https://www.destinationcocktails.fr/wp-content/uploads/recipes/214_mojito.jpg', 'desc Mojito'),
      new Cocktail('Pina Colada', 'https://www.destinationcocktails.fr/wp-content/uploads/recipes/002_pinacolada.jpg', 'desc Pina Colada'),
      new Cocktail('Bahama Mama', 'https://www.destinationcocktails.fr/wp-content/uploads/recipes/499_bahama_mama.jpg', 'desc Bahama Mama')
    ]
  );

  public cocktail : BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0])

  constructor() { }

  selectCocktail(index : number) : void {
    this.cocktail.next(this.cocktails.value[index]);
  }
}

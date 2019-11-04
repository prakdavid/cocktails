import { Injectable } from '@angular/core';
import { Cocktail } from "../models/cocktail.model";
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails : BehaviorSubject<Cocktail[]> = new BehaviorSubject(
    [
      new Cocktail(
        'Mojito',
        'https://www.destinationcocktails.fr/wp-content/uploads/recipes/214_mojito.jpg',
        'desc Mojito',
        [
          new Ingredient('perrier', 1),
          new Ingredient('citron', 2),
          new Ingredient('sucre', 3)
        ]),
      new Cocktail(
        'Pina Colada',
        'https://www.destinationcocktails.fr/wp-content/uploads/recipes/002_pinacolada.jpg',
        'desc Pina Colada',
        [
          new Ingredient('a', 1),
          new Ingredient('v', 2),
          new Ingredient('c', 3)
        ]),
      new Cocktail(
        'Bahama Mama',
        'https://www.destinationcocktails.fr/wp-content/uploads/recipes/499_bahama_mama.jpg',
        'desc Bahama Mama',
        [
          new Ingredient('r', 1),
          new Ingredient('d', 2),
          new Ingredient('g', 3)
        ])
    ]
  );

  constructor() { }

  getCocktail(index : number) : Cocktail {
    return this.cocktails.value[index];
  }
}

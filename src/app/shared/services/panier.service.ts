import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public panier : BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);
  constructor() { 
  }


  addPanier(ingredients : Ingredient[]) : void {
    let currentPanier : Ingredient[] = this.panier.value;
    if (ingredients.length) {
      this.panier.next(currentPanier.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }
  }
}

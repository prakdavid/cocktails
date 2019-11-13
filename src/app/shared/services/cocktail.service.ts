import { Injectable } from '@angular/core';
import { Cocktail } from "../models/cocktail.model";
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails : BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);
  private url: string = 'https://http-angular-7c791.firebaseio.com/cocktails.json';

  constructor(private http: HttpClient) {
    // this.http.put('https://http-angular-7c791.firebaseio.com/cocktails.json', this.cocktails.value).subscribe( res => console.log(res) );
    this.initCocktails();
  }

  initCocktails() {
    return this.http.get<Cocktail[]>(this.url).subscribe( (cocktails: Cocktail[]) => {
      this.cocktails.next(cocktails);
    } );
  }

  getCocktail(index : number) : Observable<Cocktail> {
    return this.cocktails.pipe(
      filter( (cocktails: Cocktail[]) => cocktails != null ),
      map( (cocktails: Cocktail[]) => cocktails[index])
    );
  }

  addCocktail(cocktail : Cocktail) : void {
    let currentCocktails : Cocktail[] = this.cocktails.value;
    let newCocktail = new Cocktail(cocktail.name, cocktail.image, cocktail.desc, cocktail.ingredients.map( ingredient => new Ingredient(ingredient.name, ingredient.quantity)));
    currentCocktails.push(newCocktail);

    this.save();

  }

  editCocktail(editCocktail : Cocktail) : void {
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.map( (cocktail)  => {
      return cocktail.name;
    }).indexOf(editCocktail.name);
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
    this.save();
  }

  save() : void {
    this.http.put(this.url, this.cocktails.value).subscribe();
  }
}

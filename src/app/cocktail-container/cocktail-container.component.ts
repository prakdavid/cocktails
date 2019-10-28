import { Component, OnInit } from '@angular/core';
import { Cocktail } from "../shared/cocktail.model";

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Array<Cocktail> = [
    new Cocktail('Mojito', 'https://www.destinationcocktails.fr/wp-content/uploads/recipes/214_mojito.jpg', 'desc Mojito'),
    new Cocktail('Pina Colada', 'https://www.destinationcocktails.fr/wp-content/uploads/recipes/002_pinacolada.jpg', 'desc Pina Colada'),
    new Cocktail('Bahama Mama', 'https://www.destinationcocktails.fr/wp-content/uploads/recipes/499_bahama_mama.jpg', 'desc Bahama Mama')
  ]

  public cocktail : Cocktail;

  constructor() { }

  ngOnInit() {
    this.cocktail = this.cocktails[0];
  }

  concktailClick(value) {
    console.log(value);
    this.cocktail = this.cocktails[value];
  }
}

import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from "../../shared/services/cocktail.service";
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail : Cocktail;
  public index : number  = 0;
  constructor(
    private cocktailService : CocktailService,
    private panierService : PanierService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { 

    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( (value : ParamMap) => {
      this.index = Number(value.get('index'));
      this.cocktail=  this.cocktailService.getCocktail(this.index);
  } );
  }

  addPanier(ingredients : Ingredient[]) : void {
    this.panierService.addPanier(ingredients);
    this.router.navigate(['panier']);
  }
}

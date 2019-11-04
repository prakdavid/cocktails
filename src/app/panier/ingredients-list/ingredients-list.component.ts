import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit, OnDestroy {
  public ingredients : Ingredient[] = [];
  private subscription : Subscription;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private panierService : PanierService) { }

  ngOnInit() {
    this.subscription = this.panierService.panier.subscribe( (panier : Ingredient[]) => {
      this.ingredients = panier;
    } );
  }

}

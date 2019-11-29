import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

import { ActiveDirective } from './shared/directives/active.directive';
import { PanierService } from "./shared/services/panier.service";
import { FilterPipe } from './shared/pipe/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    CocktailContainerComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent,
    CocktailEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }

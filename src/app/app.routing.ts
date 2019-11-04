import { Route , RouterModule} from "@angular/router";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { PanierComponent } from './panier/panier.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';

const APP_ROUTE : Route[] = [
    { path : '' , redirectTo: 'cocktails', pathMatch: 'full' },
    { path : 'panier', component : PanierComponent},
    { path : 'cocktails', component : CocktailContainerComponent, children : [
        { path : '', component : CocktailsDetailsComponent},
        { path : 'new', component : CocktailEditComponent},
        { path : ':index', component : CocktailsDetailsComponent},
        { path : ':index/edit', component : CocktailEditComponent},
    ]}
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);
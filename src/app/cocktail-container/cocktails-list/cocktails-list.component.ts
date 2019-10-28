import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Cocktail } from "../../shared/cocktail.model";

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  @Input() cocktails : Array<Cocktail>;
  @Output() emitCocktail : EventEmitter<number> = new EventEmitter();


  constructor() {
   }

  ngOnInit() {
  }

  cocktailClick(index : number) : void {
    console.log(index);
    this.emitCocktail.emit(index);
  }

}

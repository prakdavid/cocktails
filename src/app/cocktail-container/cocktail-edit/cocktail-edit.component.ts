import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from 'src/app/shared/models/cocktail.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  public cocktailForm : FormGroup;
  public cocktail : Cocktail;
  private isEdit : boolean = false;

  constructor(private formBuilder : FormBuilder, private cocktailService : CocktailService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( (data : ParamMap) => {
      if (data.get('index') !== null) {
        this.cocktailService.getCocktail(Number(data.get('index'))).subscribe( (cocktail: Cocktail) => {
          this.cocktail = cocktail;
          this.initForm(this.cocktail);
        })
        this.isEdit = true;
      } else {
        this.initForm();
      }
    });
  }

  initForm(cocktail: Cocktail = {name: '', image: '', desc: '', ingredients: []}) {
    this.cocktailForm = this.formBuilder.group({
      name : [cocktail.name, Validators.required],
      image: [cocktail.image, Validators.required],
      desc: [cocktail.desc],
      ingredients: this.formBuilder.array(cocktail.ingredients.map((ingredient : Ingredient) => this.createItem(ingredient)))
    });
  }

  createItem(ingredient : Ingredient) :FormGroup {
    return this.formBuilder.group({
      name: [ingredient.name],
      quantity: [ingredient.quantity]
    })
  }

  addIngredient() : void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.formBuilder.group({
      name: [''],
      quantity: ['']
    }));
  }

  createCocktail() {
    if (this.isEdit) {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
  }

}

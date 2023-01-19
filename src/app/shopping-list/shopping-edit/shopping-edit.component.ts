import { Ingredient } from './../../shared/ingredient.model';
import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  @Output() ingredientCreated = new EventEmitter<Ingredient>()
  newIngredient: Ingredient;


  onAddIngredient() {
    this.newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value);
    this.ingredientCreated.emit(this.newIngredient);
  }

}

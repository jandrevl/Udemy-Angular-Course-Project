import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeChosen = new EventEmitter<Recipe>()
  
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is Just a Test', 'https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Lamb-Medium-Rare%E2%80%8B%E2%80%8B.jpg'),
    new Recipe('Another Test Recipe', 'This is Just another Test for the recipe APP', 'https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Lamb-Medium-Rare%E2%80%8B%E2%80%8B.jpg')
  ];

  onSelectRecipe(recipe: Recipe) {
    this.recipeChosen.emit(recipe);
  }

}

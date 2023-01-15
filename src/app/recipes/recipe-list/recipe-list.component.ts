import { Recipe } from './../recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is Just a Test', 'https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Lamb-Medium-Rare%E2%80%8B%E2%80%8B.jpg'), new Recipe('A Test Recipe', 'This is Just a Test', 'https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Lamb-Medium-Rare%E2%80%8B%E2%80%8B.jpg')
  ];
}

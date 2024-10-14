import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient.model';
import { MatButtonModule } from '@angular/material/button';
import { ApproximationPipe } from "../../pipes/approximation.pipe";
import { DailyValuePipe } from '../../pipes/daily-value.pipe';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [MatButtonModule, ApproximationPipe,DailyValuePipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  nutritionData: any = null;
  ingredientsList: Ingredient[] = new Array<Ingredient>();
  totalNutrition: Ingredient = {
    calories: 0,
    fat: 0,
    cholesterol: 0,
    sodium: 0,
    carbohydrates: 0,
    fiber: 0,
    sugar: 0,
    protein: 0,
    vitaminC: 0,
    calcium: 0,
    iron: 0,
    potassium: 0
  } as Ingredient;
  showTotals: boolean = false;  // Flag to show/hide the card with totals

  constructor(private router: Router) {
    this.nutritionData = this.router.getCurrentNavigation()?.extras?.state?.['nutritionData'];
    if (this.nutritionData) this.processNutritionData(this.nutritionData);
  }



  processNutritionData(nutritionData: any): void {
    if (nutritionData) {
      this.ingredientsList = nutritionData.ingredients.map((ingredient: any) => {
        const parsed = ingredient.parsed[0];
        return {
          food: ingredient.text,
          quantity: parsed.quantity,
          unit: parsed.measure,
          calories: parsed.nutrients.ENERC_KCAL.quantity,
          fat: parsed.nutrients.FAT.quantity,
          cholesterol: parsed.nutrients.CHOLE.quantity,
          sodium: parsed.nutrients.NA.quantity,
          carbohydrates: parsed.nutrients.CHOCDF.quantity,
          fiber: parsed.nutrients.FIBTG?.quantity || 0,
          sugar: parsed.nutrients.SUGAR?.quantity || 0,
          protein: parsed.nutrients.PROCNT.quantity,
          vitaminC: parsed.nutrients.VITC?.quantity || 0,
          calcium: parsed.nutrients.CA.quantity,
          iron: parsed.nutrients.FE.quantity,
          potassium: parsed.nutrients.K.quantity,
          weight: parsed.weight
        };
      });
    }
    this.calculateTotalNutrition();
  }
  // Calculate total nutrition for all ingredients
  calculateTotalNutrition(): void {
    this.ingredientsList.forEach(ingredient => {
      this.totalNutrition.calories += ingredient.calories;
      this.totalNutrition.fat += ingredient.fat;
      this.totalNutrition.cholesterol += ingredient.cholesterol;
      this.totalNutrition.sodium += ingredient.sodium;
      this.totalNutrition.carbohydrates += ingredient.carbohydrates;
      this.totalNutrition.fiber += ingredient.fiber;
      this.totalNutrition.sugar += ingredient.sugar;
      this.totalNutrition.protein += ingredient.protein;
      this.totalNutrition.vitaminC += ingredient.vitaminC;
      this.totalNutrition.calcium += ingredient.calcium;
      this.totalNutrition.iron += ingredient.iron;
      this.totalNutrition.potassium += ingredient.potassium;
    });
  }

  showTotalNutrition() {
    this.showTotals = true;
  }
}

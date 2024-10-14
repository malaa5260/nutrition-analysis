export interface Ingredient {
    quantity: number;
    unit: string;
    food: string;
    calories: number;
    weight: number;
    fat: number;
    cholesterol: number;
    sodium: number;
    carbohydrates: number;
    fiber: number;
    sugar: number;
    protein: number;
    vitaminC: number;
    calcium: number;
    iron: number;
    potassium: number;
  }
  
  export interface NutritionData {
    ingredients: Ingredient[];
  }

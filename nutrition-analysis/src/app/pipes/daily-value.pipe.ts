import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dailyValue',
  standalone: true
})
export class DailyValuePipe implements PipeTransform {

  // Recommended Daily Intake (RDI) for nutrients (based on a 2000 calorie diet)
  private RDI = {
    calories: 2000,
    fat: 78,          // in grams
    cholesterol: 300,  // in mg
    sodium: 2300,      // in mg
    carbohydrates: 275, // in grams
    fiber: 28,        // in grams
    sugar: 50,        // in grams (not official, but often used)
    protein: 50,      // in grams
    vitaminC: 90,     // in mg
    calcium: 1300,    // in mg
    iron: 18,         // in mg
    potassium: 4700   // in mg
  } as any;

  // Transform function to calculate percentage of daily value
  transform(value: number, nutrient: string): string {
    const rdiValue = this.RDI[nutrient];
    if (!rdiValue || value == null || isNaN(value)) {
      return '0%';  // If no RDI or invalid value, return 0%
    }
    const percentage = (value / rdiValue) * 100;
    return percentage.toFixed(0) + '%';  // Round to whole number and add % symbol
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ingredients-input',
  standalone: true,
  imports: [FormsModule,MatButtonModule],
  templateUrl: './ingredients-input.component.html',
  styleUrl: './ingredients-input.component.scss'
})
export class IngredientsInputComponent {
  ingredients: string = '';  // Store the user's input
  isAnalyzeButtonEnabled: boolean = false;  // Button state

  // Method to handle input changes
  onInputChange(): void {
    this.isAnalyzeButtonEnabled = this.ingredients.trim().length > 0;  // Enable button if input exists
  }

  // Method to handle analyze action
  analyzeIngredients(): void {
    if (this.isAnalyzeButtonEnabled) {
      console.log('Analyzing ingredients:', this.ingredients);
      // Logic for analyzing the ingredients will go here later
    }
  }
}

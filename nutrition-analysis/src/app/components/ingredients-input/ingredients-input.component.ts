import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NutritionService } from '../../services/nutrition.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ingredients-input',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './ingredients-input.component.html',
  styleUrl: './ingredients-input.component.scss'
})
export class IngredientsInputComponent {
  ingredients: string = '';  // Store the user's input
  isAnalyzeButtonEnabled: boolean = false;  // Button state
  nutritionData: any = null;
  errorMessage: string = '';  // Error message to show to the user


  constructor(private nutritionService: NutritionService,
    private router: Router, private snackBar: MatSnackBar,

  ) { }

  onInputChange(): void {
    this.isAnalyzeButtonEnabled = this.ingredients.trim().length > 0;  // Enable button if input exists
  }

  analyzeIngredients(): void {
    if (this.isAnalyzeButtonEnabled) {
      this.nutritionService.analyzeIngredients(this.ingredients).subscribe(
        data => {
          // Handle successful response
          this.nutritionData = data;

          // Check if the nutritionData contains an error message
          if (this.nutritionData && this.nutritionData.error === 'low_quality') {
            this.handleError('The ingredients provided are of low quality. Please try again with more detailed information.');
          } else if (this.nutritionData) {
            // If no error, navigate to the summary page
            this.router.navigate(['/summary'], { state: { nutritionData: this.nutritionData } });
          }
        },
        error => {
          // Handle general HTTP errors or server errors
          this.handleError('An error occurred while analyzing the ingredients. Please try again.');
          console.error('Error analyzing ingredients:', error);
        }
      );
    }
  }
  handleError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}

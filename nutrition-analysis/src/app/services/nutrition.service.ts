import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private baseApiUrl = environment.edamam.apiUrl;
  private appId = environment.edamam.appId;
  private appKey = environment.edamam.appKey;
  constructor(private http: HttpClient) { }

  // Function to analyze ingredients and get nutrition data
  analyzeIngredients(ingredients: string): Observable<any> {
    const body = {
      ingr: ingredients.split('\n').filter(line => line.trim() !== '')  // Split by line, remove empty lines
    };

    const fullUrl = `${this.baseApiUrl}/nutrition-details?app_id=${this.appId}&app_key=${this.appKey}`;
    return this.http.post(fullUrl, body).pipe(
      map(response => response));
  }
}

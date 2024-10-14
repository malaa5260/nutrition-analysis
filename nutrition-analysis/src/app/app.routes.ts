import { Routes } from '@angular/router';
import { IngredientsInputComponent } from './components/ingredients-input/ingredients-input.component';

export const routes: Routes = [
    { path: '', component: IngredientsInputComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

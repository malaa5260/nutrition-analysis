import { Routes } from '@angular/router';
import { IngredientsInputComponent } from './components/ingredients-input/ingredients-input.component';
import { SummaryComponent } from './components/summary/summary.component';

export const routes: Routes = [
    { path: '', component: IngredientsInputComponent },
    { path: 'summary', component: SummaryComponent } ,
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

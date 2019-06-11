import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MutantsComponent } from './mutants/mutants.component';
import { VilliansComponent } from './villians/villians.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MutantDetailComponent } from './mutant-detail/mutant-detail.component';

const routes: Routes = [
	{ path: 'mutants', component: MutantsComponent     },
	{ path: 'villians', component: VilliansComponent   },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{ path: 'detail/:id', component: MutantDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

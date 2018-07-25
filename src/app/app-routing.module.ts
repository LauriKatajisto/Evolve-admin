import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListworkoutsComponent } from './listworkouts/listworkouts.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';

const routes: Routes = [
  { path: '', component: ListworkoutsComponent },
  { path: 'addworkout', component: AddworkoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

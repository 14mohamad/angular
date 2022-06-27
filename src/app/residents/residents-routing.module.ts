import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditResidentComponent } from './edit-resident/edit-resident.component';
import { ResidentsDetailsComponent } from './residents-details/residents-details.component';

const routes: Routes = [
  { path: 'residents', component: ResidentsDetailsComponent },
  { path: 'residents/:id', component: EditResidentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentsRoutingModule {}

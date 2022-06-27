import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsDetailsComponent } from './residents-details/residents-details.component';
import { EditResidentComponent } from './edit-resident/edit-resident.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResidentsDetailsComponent, EditResidentComponent],
  imports: [CommonModule, ResidentsRoutingModule, FormsModule],
})
export class ResidentsModule {}

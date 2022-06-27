import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsDetailComponent } from './events-detail/events-detail.component';
import { EditEventDetailComponent } from './edit-event-detail/edit-event-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventsDetailComponent, EditEventDetailComponent],
  imports: [CommonModule, EventsRoutingModule, FormsModule],
})
export class EventsModule {}

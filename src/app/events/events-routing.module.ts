import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEventDetailComponent } from './edit-event-detail/edit-event-detail.component';
import { EventsDetailComponent } from './events-detail/events-detail.component';

const routes: Routes = [
  { path: 'events', component: EventsDetailComponent },
  { path: 'events/:id', component: EditEventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}

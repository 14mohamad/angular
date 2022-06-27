import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Resident from '../Resident';
import { ResidentsService } from '../residents.service';
import { switchMap } from 'rxjs/operators';
import { MaritalStatus } from '../Resident';

@Component({
  selector: 'app-edit-resident',
  templateUrl: './edit-resident.component.html',
  styleUrls: ['./edit-resident.component.css'],
})
export class EditResidentComponent implements OnInit {
  MaritalStatus = MaritalStatus;
  resident: Observable<Resident | undefined> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ResidentsService
  ) {}

  ngOnInit(): void {
    this.resident = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getResidentById(String(params.get('id')));
      })
    );
  }

  goBack() {
    this.router.navigate(['/residents']);
  }
}

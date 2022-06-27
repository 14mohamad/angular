import { Component, OnInit } from '@angular/core';
import Resident from '../Resident';
import { ResidentsService } from '../residents.service';

@Component({
  selector: 'app-residents-details',
  templateUrl: './residents-details.component.html',
  styleUrls: ['./residents-details.component.css'],
})
export class ResidentsDetailsComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private service: ResidentsService) {}

  ngOnInit(): void {
    this.getResidents();
  }

  getResidents(): void {
    this.service.getResidents().subscribe((res) => (this.residents = res));
  }

  getResidentById(id: string): Resident | undefined {
    let result: Resident | undefined;
    this.service.getResidentById(id).subscribe((res) => (result = res));
    return result;
  }
}

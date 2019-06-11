import { Component, OnInit } from '@angular/core';
import { Mutant } from '../mutant';
import { MutantService } from '../mutant.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mutants: Mutant[] = [];

  constructor(private mutantService: MutantService) { }

  ngOnInit() {
  	this.getMutants();
  }

  getMutants(): void {
  	this.mutantService.getMutants()
  	  .subscribe(mutants => this.mutants = mutants.slice(1, 5));
  }



}

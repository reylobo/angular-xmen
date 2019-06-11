import { Component, OnInit } from '@angular/core';
import { Mutant } from '../mutant';
import { MutantService } from '../mutant.service';

@Component({
  selector: 'app-mutants',
  templateUrl: './mutants.component.html',
  styleUrls: ['./mutants.component.scss']
})
export class MutantsComponent implements OnInit {
  
  mutants: Mutant[];
  selectedMutant: Mutant;

  constructor(private mutantService: MutantService) {}

  ngOnInit() {
    this.getMutants();
  }

  onSelect(mutant: Mutant): void {
  	this.selectedMutant = mutant;
  }

  getMutants(): void {
    this.mutantService.getMutants()
      .subscribe(mutants => this.mutants = mutants);
  }

}

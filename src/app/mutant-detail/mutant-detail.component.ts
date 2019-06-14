import { Component, OnInit, Input } from '@angular/core';
import { Mutant } from '../mutant';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MutantService } from '../mutant.service';

@Component({
  selector: 'app-mutant-detail',
  templateUrl: './mutant-detail.component.html',
  styleUrls: ['./mutant-detail.component.scss']
})
export class MutantDetailComponent implements OnInit {
  
  @Input() mutant: Mutant;

  constructor(
  	private route: ActivatedRoute,
  	private mutantService: MutantService,
  	private location: Location
  	) { }

  ngOnInit() {
  	this.getMutant();
  }

  getMutant(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.mutantService.getMutant(id)
  	.subscribe(mutant => this.mutant = mutant);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.mutantService.updateMutant(this.mutant)
    .subscribe(() => this.goBack());
  }
}

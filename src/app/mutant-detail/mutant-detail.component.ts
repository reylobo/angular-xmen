import { Component, OnInit, Input } from '@angular/core';
import { Mutant } from '../mutant';

@Component({
  selector: 'app-mutant-detail',
  templateUrl: './mutant-detail.component.html',
  styleUrls: ['./mutant-detail.component.scss']
})
export class MutantDetailComponent implements OnInit {
  
  @Input() mutant: Mutant;

  constructor() { }

  ngOnInit() {
  }

}

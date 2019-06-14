import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
	debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Mutant } from '../mutant';
import { MutantService } from '../mutant.service';

@Component({
  selector: 'app-mutant-search',
  templateUrl: './mutant-search.component.html',
  styleUrls: ['./mutant-search.component.scss']
})
export class MutantSearchComponent implements OnInit {
  
  mutants$: Observable<Mutant[]>;
  private searchTerms = new Subject<string>();


  constructor(private mutantService: MutantService) { }

  
  // Push a search term into the observable stream.
  search(term: string): void {
  	this.searchTerms.next(term);
  }
  

  ngOnInit(): void {
  this.mutants$ = this.searchTerms.pipe(

  // Wait 300ms after each keystroke before considering the term
  debounceTime(300),
 
  // ignore new term if same as previous term
  distinctUntilChanged(),

  // switch to new search obsrvable each time the changes
  switchMap((term: string) => this.mutantService.searchMutants(term)),
  	);
  }

}

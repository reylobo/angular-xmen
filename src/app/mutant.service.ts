import { Injectable } from '@angular/core';
import { Mutant } from './mutant';
import { MUTANTS } from './mock-mutants';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MutantService {

  constructor(private messageService: MessageService) { }

  getMutants(): Observable<Mutant[]> {
  	this.messageService.add('HeroService: fetched heroes');
  	return of(MUTANTS);
  }


}

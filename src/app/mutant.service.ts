import { Injectable } from '@angular/core';
import { Mutant } from './mutant';
import { MUTANTS } from './mock-mutants';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MutantService {

  private mutantsUrl = 'api/mutants';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMutants(): Observable<Mutant[]> {
  	// this.messageService.add('MutantService: fetched heroes');
  	// return of(MUTANTS);
    
    return this.http.get<Mutant[]>(this.mutantsUrl);
  }

  getMutant(id: number): Observable<Mutant> {
  	this.messageService.add(`MutantService: fetche mutant id=${id}`);
  	return of(MUTANTS.find(mutant => mutant.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MutantService: ${message}`);
  }

}

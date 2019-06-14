import { Injectable } from '@angular/core';
import { Mutant } from './mutant';
import { MUTANTS } from './mock-mutants';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class MutantService {

  private mutantsUrl = 'api/mutants';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET mutants from the server */
  getMutants(): Observable<Mutant[]> {
  	// this.messageService.add('MutantService: fetched heroes');
  	// return of(MUTANTS);
    return this.http.get<Mutant[]>(this.mutantsUrl)
    .pipe(
      tap(_=> this.log('fetched heroes')),
        catchError(this.handleError<Mutant[]>('getMutants', []))
      );
  }

  /** GET heroes from the server  */
  /** GET hero by id. Will 404 if id not found */

  getMutant(id: number): Observable<Mutant> {
  	// this.messageService.add(`MutantService: fetche mutant id=${id}`);
  	// return of(MUTANTS.find(mutant => mutant.id === id));
    const url = `${this.mutantsUrl}/${id}`;
    return this.http.get<Mutant>(url).pipe(
        tap(_ => this.log(`fetched mutant id=${id}`)),
        catchError(this.handleError<Mutant>('getMutant id=${id}'))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MutantService: ${message}`);
  }

  /**
  * HandleHttp opertion that failed
  * Let the app continue.
  * @param operation - name of the operation that failed.
  * @param result - optional value to return as observable result.
  */
  private handleError<T> (operation = 'opration', result?: T) {
    return (error: any): Observable<T> => {


      // TODO: end the error to remote logging infraestructure

      console.error(error); // log to console instead


      // TODO: better job of transforming error for use consumption

      this.log(`${operation} failed: ${error.message}`);

      // let the appkeep running by returning an empty result

      return of(result as T);
    }
  }


  /** PUT: update the hero on the server */

  updateMutant (mutant: Mutant): Observable<any> {
    return this.http.put(this.mutantsUrl, mutant, httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${mutant.id}`)),
        catchError(this.handleError<any>('updateMutant'))
      );
  }

  /** POST: add a new mutant to the server */

  addMutant (mutant: Mutant): Observable<Mutant> {
    return this.http.post<Mutant>(this.mutantsUrl, mutant, httpOptions).pipe(
      tap((newMutant: Mutant) => this.log(`added mutant w/ id=${newMutant.id}`)),
      catchError(this.handleError<Mutant>('addMutant'))
      );
  }


  /** DELETE: delete the mutant from the server */
  
  deleteMutant (mutant: Mutant | number): Observable<Mutant> {
    const id = typeof mutant === 'number' ? mutant : mutant.id;
    const url = `${this.mutantsUrl}/${id}`;

    return this.http.delete<Mutant>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted mutant id=${id}`)),
      catchError(this.handleError<Mutant>('deleteMutant'))
      );
  }



  /* GET heroes whose name contains search term */

  searchMutants(term: string): Observable<Mutant[]> {
    if (!term.trim()) {
      //if not search term, return empty mutant array.
      return of([]);
    }
    return this.http.get<Mutant[]>(`${this.mutantsUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found mutants matching "${term}"`)),
        catchError(this.handleError<Mutant[]>('searchMutant', []))
      );
  }

}
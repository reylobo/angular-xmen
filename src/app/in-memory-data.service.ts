import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mutant } from './mutant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
  	const mutants = [

  {	id: 11,
  	name: 'Wolverine',
  	superpower: 'fast-healing',
  	picture: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/034wlv_com_crd_01.jpg'
  },
  {	id: 12,
  	name: 'Xavier',
  	superpower: 'telekinesis',
  	picture: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/homx.jpg'
  },
  {  id: 13,
    name: 'Magneto',
    superpower: 'magnetic',
    picture: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/058mgn_com_crd_01.jpg'
  },
  {  id: 14,
    name: 'Storm',
    superpower: 'weather-caster',
    picture: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/039stm_com_crd_01.jpg'
  },
  {  id: 15,
    name: 'Gambit',
    superpower: 'card-dealer',
    picture: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/gambit442.jpg'
  }
  ];

  return {mutants};
}

  genId(mutants: Mutant[]): number {
	  return mutants.length > 0 ? Math.max(...mutants.map(mutant => mutant.id)) + 1 : 11;
  }

  constructor() { }
}
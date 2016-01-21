import {Wine} from './wine';
import {WINES} from './mock-wines';
import {Injectable} from 'angular2/core';

@Injectable()

export class WineService {
  wines: Wine[];

  constructor() { this.wines = WINES;  }

  getWines(){
    return Promise.resolve(this.wines);
  }

  addWine(newWine) {
    this.wines.push(new Wine (newWine))
  }
}

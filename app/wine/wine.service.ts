import {Wine} from './wine';
import {WINES} from './mock-wines';
import {Injectable} from 'angular2/core';

@Injectable()

export class WineService {
  getWines(){
    return Promise.resolve(WINES);
  }
}

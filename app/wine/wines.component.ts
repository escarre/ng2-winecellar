import {Component} from 'angular2/core';
import {Wine} from './wine';
import {WineService} from './wine.service';
import {Router} from 'angular2/router';

@Component({
  selector: 'wine-detail',
  templateUrl: 'app/wine/wines.html',
  inputs: ['wine']
})

export class WinesComponent {
  wines: Wine[];
  selectedWine: Wine;
  newWine: String;

  constructor(private _wineService: WineService, private _router: Router) { }

  getWines() {
    this._wineService.getWines().then(wines => this.wines = wines);
  }

  ngOnInit() {
    this.getWines();
  }

  gotoWine(wine: Wine) {
    this._router.navigate(['WineDetail', { id: this.selectedWine.id }]);
  }

  onSelect(wine: Wine) { this.selectedWine = wine; }

  addWine() {
    this._wineService.addWine(this.newWine);
    this.newWine = '';
  }
}

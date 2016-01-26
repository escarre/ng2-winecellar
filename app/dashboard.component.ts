import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Wine} from './wine/wine';
import {WineService} from './wine/wine.service'

@Component({
	selector: 'dashboard',
	templateUrl: 'app/dashboard.html'
})
export class DashboardComponent implements OnInit{
  public wines: Wine[] = [];

  constructor(private _wineService: WineService, private _router: Router) { }

  ngOnInit() {
    //this could only return top 5 unopened wines
    //could also do some averages
    this._wineService.getWines().then(wines => this.wines = wines);
  }

  gotoWine(wine: Wine) {
    this._router.navigate(['WineDetail', { id: wine.id }]);
  }
}

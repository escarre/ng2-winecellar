import {Component, OnInit} from 'angular2/core';
import {Wine} from './wine/wine';
import {WineDetailComponent} from './wine/wine-detail.component';
import {WineService} from './wine/wine.service'

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html',  
directives: [WineDetailComponent],
providers: [WineService]
})

export class AppComponent {
	public title = 'Wine Cellar';
	public wines: Wine[];
	public selectedWine: Wine;

	constructor(private _wineService: WineService) { }

	getWines() {
		this._wineService.getWines().then(wines => this.wines = wines);
	}

	ngOnInit() {
    this.getWines();
  }

	onSelect(wine: Wine) { this.selectedWine = wine; }
}

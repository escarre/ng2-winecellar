import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Wine} from './wine/wine';
import {WinesComponent} from './wine/wines.component';
import {DashboardComponent} from './dashboard.component';
import {WineDetailComponent} from './wine/wine-detail.component';
import {WineService} from './wine/wine.service'

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [WineService, ROUTER_PROVIDERS]
})
@RouteConfig([
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
	{ path: '/wines', name: 'Wines', component: WinesComponent },
	{ path: 'detail/:id', name: 'WineDetail', component: WineDetailComponent}
])
export class AppComponent {
  title = 'Wine Cellar';
}

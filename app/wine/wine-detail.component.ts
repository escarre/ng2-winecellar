import {Component} from 'angular2/core';
import {Wine} from './wine';

@Component({
  selector: 'my-wine-detail',
  templateUrl: 'app/wine/wine-detail.html',
  inputs: ['wine']
})

export class WineDetailComponent {
  public wine: Wine;
}

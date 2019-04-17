import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {WikipediaSearch} from '../wikipedia-search.model';

@Component({
  selector: 'app-wikipedia-container',
  template: `
    <div>
      <app-wikipedia-search></app-wikipedia-search>
      <app-wikipedia-search-results></app-wikipedia-search-results>
    </div>
  `,
  styles: [
    `
      div {
        padding: 1em;
      }
    `
  ]
})
export class WikipediaContainerComponent {
  constructor(private readonly store: Store<WikipediaSearch>) {}
}

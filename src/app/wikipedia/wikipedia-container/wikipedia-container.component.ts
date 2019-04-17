import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {WikipediaSearch} from '../wikipedia-search.model';
import {searchWikipediaSideEffectCreator} from '../wikipedia-side-effects';

@Component({
  selector: 'app-wikipedia-container',
  template: `
    <div>
      <app-wikipedia-search (search)="findArticles($event)"></app-wikipedia-search>
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

  findArticles(search: string) {
    this.store.dispatch(searchWikipediaSideEffectCreator(search));
  }
}

import {Component, ViewChild} from '@angular/core';
import {WikipediaSearchComponent} from '../wikipedia-search/wikipedia-search.component';

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
  @ViewChild(WikipediaSearchComponent)
  wikipediaSearch: WikipediaSearchComponent;
}

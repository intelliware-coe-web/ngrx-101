import {Component, Input} from '@angular/core';
import {WikipediaSearchResults} from '../wikipedia-search-results.model';

@Component({
  selector: 'app-wikipedia-search-results',
  template: `
    <p>
      wikipedia-search-results works!
    </p>
  `
})
export class WikipediaSearchResultsComponent {
  @Input()
  searchResults: Array<WikipediaSearchResults> = [];
}

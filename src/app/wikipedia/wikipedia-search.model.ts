import {WikipediaSearchResults} from './wikipedia-search-results.model';

export class WikipediaSearch {
  constructor(
    readonly search: string = '',
    readonly searchResults: WikipediaSearchResults[] = []
  ) {}
}

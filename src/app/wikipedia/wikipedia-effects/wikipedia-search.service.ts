import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WikipediaSearchResults} from '../wikipedia-search-results.model';
import {map} from 'rxjs/operators';

@Injectable()
export class WikipediaSearchService {
  constructor(private readonly http$: HttpClient) {
  }

  findAll(search: string) {
    return this.http$.get(`http://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${search}`).pipe(
      map((results: WikipediaSearchResults[]) => [search, results])
    );
  }
}

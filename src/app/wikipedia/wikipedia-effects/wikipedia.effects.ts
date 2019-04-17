import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {SEARCH_WIKIPEDIA_SIDE_EFFECT, SearchWikipediaSideEffect} from '../wikipedia-side-effects';
import {concatMap, debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {WikipediaSearchService} from './wikipedia-search.service';
import {updateSearchActionCreator, updateSearchResultsActionCreator} from '../wikipedia-search.actions';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {WikipediaSearchResults} from '../wikipedia-search-results.model';

@Injectable()
export class WikipediaEffects {
  constructor(private readonly actions$: Actions,
              private readonly wikipediaSearch: WikipediaSearchService
  ) {
  }

  @Effect()
  searchWikipedia$ = this.actions$.pipe(
    ofType(SEARCH_WIKIPEDIA_SIDE_EFFECT),
    debounceTime(1000),
    map((action: SearchWikipediaSideEffect) => action.search),
    distinctUntilChanged(),
    switchMap((search) => this.wikipediaSearch.findAll(search)),
    concatMap(([search, results]) => [
      updateSearchActionCreator(search as string),
      updateSearchResultsActionCreator(results as WikipediaSearchResults[])
    ])
  );
}

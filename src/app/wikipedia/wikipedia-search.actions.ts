import {ActionBlueprint} from '../common/ActionBlueprint';
import {WikipediaSearch} from './wikipedia-search.model';
import {WikipediaSearchResults} from './wikipedia-search-results.model';

export type UpdateSearchAction = ActionBlueprint<'UPDATE_SEARCH_ACTION', WikipediaSearch, string>;
export type UpdateSearchResultsAction = ActionBlueprint<'UPDATE_SEARCH_RESULTS', WikipediaSearch, WikipediaSearchResults[]>;

export function updateSearchResultsActionCreator(searchResults: WikipediaSearchResults[]): UpdateSearchResultsAction {
  return {
    type: 'UPDATE_SEARCH_RESULTS',
    payload: searchResults,
    reducer(state, payload) {
      return {...state, searchResults: payload};
    }
  };
}

export function updateSearchActionCreator(search: string): UpdateSearchAction {
  return {
    type: 'UPDATE_SEARCH_ACTION',
    payload: search,
    reducer(state, payload) {
      return {...state, search: payload};
    }
  };
}

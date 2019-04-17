import {Action} from '@ngrx/store';

export const SEARCH_WIKIPEDIA_SIDE_EFFECT = 'SEARCH_WIKIPEDIA_SIDE_EFFECT';

export interface SearchWikipediaSideEffect extends Action {
  type: 'SEARCH_WIKIPEDIA_SIDE_EFFECT';
  search: string;
}

export function searchWikipediaSideEffectCreator(search: string): SearchWikipediaSideEffect {
  return {
    type: SEARCH_WIKIPEDIA_SIDE_EFFECT,
    search
  };
}

import {Action} from '@ngrx/store';

export interface ActionBlueprint<T extends string, S, P> extends Action {
  type: T;
  payload: P;
  reducer: (state: S, payload: P) => S;
}

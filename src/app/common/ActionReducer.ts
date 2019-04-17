import {ActionBlueprint} from './ActionBlueprint';

export function actionReducer<S>(state: S, action: ActionBlueprint<any, S, any>): S {
  return action.reducer ? action.reducer(state, action.payload) : state;
}

import {actionReducer} from './ActionReducer';

describe('ActionReducer', () => {
  const fixture = actionReducer;

  it('should update the state by calling the reducer function of an action', () => {
    const action = {
      type: 'DONT_CARE',
      payload: 'foo',
      reducer: jasmine.createSpy()
    };

    const state = {};
    fixture(state, action);
    expect(action.reducer).toHaveBeenCalledWith(state, action.payload);
  });
});

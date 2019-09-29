// eslint-disable-next-line no-unused-vars
import { MESSAGES_FAILED_TO_LOAD, MESSAGES_LOADED, MESSAGES_LOADING } from './action-types';
import { loadMessages } from './messages';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('creates MESSAGES_LOADED when fetching messages has been done', () => {
    jest.mock('../data/messages.json', () => ({
      messages: ['do something'],
    }));
    const expectedActions = [
      { type: MESSAGES_LOADING },
      { type: MESSAGES_LOADED, payload: { messages: ['do something'] } },
    ];
    const store = mockStore({});

    return store.dispatch(loadMessages()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to fetch when MESSAGES_FAILED_TO_LOAD', () => {
    jest.mock('../data/messages.json', () => {
      return { error: ['failed to load'] };
    });
    const expectedActions = [{ type: MESSAGES_LOADING }, { type: MESSAGES_FAILED_TO_LOAD, error: ['failed to load'] }];

    const store = mockStore({});
    return store
      .dispatch(loadMessages())
      .then()
      .catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  
});

import { MESSAGES_LOADED, MESSAGES_LOADING, MESSAGES_FAILED_TO_LOAD } from '../action-creators/action-types';

const initialState = {
  loading: false,
  messages: [],
  error: null,
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_LOADED:
      return { ...state, messages: action.payload, loading: false };
    case MESSAGES_LOADING:
      return { ...state, loading: true };
    case MESSAGES_FAILED_TO_LOAD:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default messages;

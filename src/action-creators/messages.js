import { getMessages } from '../data';
import { MESSAGES_FAILED_TO_LOAD, MESSAGES_LOADED, MESSAGES_LOADING } from './action-types';

function fetchPending() {
  return {
    type: MESSAGES_LOADING,
  };
}

const fetchSuccess = data => ({
  type: MESSAGES_LOADED,
  payload: data,
});

function fetchError(error) {
  return {
    type: MESSAGES_FAILED_TO_LOAD,
    error: error,
  };
}

export function loadMessages() {
  return function(dispatch) {
    dispatch(fetchPending());
    return getMessages()
      .then(data => dispatch(fetchSuccess(data)))
      .catch(error => {
        dispatch(fetchError(error));
      });
  };
}


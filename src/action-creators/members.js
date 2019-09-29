import {getMembers } from '../data';
import { MEMBERS_LOADING, MEMBERS_LOADED, MEMBERS_FAILED_TO_LOAD} from './action-types';

function fetchPending() {
  return {
    type: MEMBERS_LOADING,
  };
}

const fetchMemberSuccess = data => ({
  type: MEMBERS_LOADED,
  payload: data,
});

function fetchError(error) {
  return {
    type: MEMBERS_FAILED_TO_LOAD,
    error: error,
  };
}

export function loadMembers() {
  return function(dispatch) {
    dispatch(fetchPending());
    return getMembers()
      .then(data => dispatch(fetchMemberSuccess(data)))
      .catch(error => {
        dispatch(fetchError(error));
      });
  };
}


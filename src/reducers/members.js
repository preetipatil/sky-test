import { MEMBERS_LOADING, MEMBERS_LOADED, MEMBERS_FAILED_TO_LOAD } from '../action-creators/action-types';

const initialState = {
  loading: false,
  members: [],
  error: null,
};

const members = (state = initialState, action) => {
  switch (action.type) {
    case MEMBERS_LOADED:
      return { ...state, members: action.payload, loading: false };
    case MEMBERS_LOADING:
      return { ...state, loading: true };
    case MEMBERS_FAILED_TO_LOAD:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default members;

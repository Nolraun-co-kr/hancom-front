import produce from 'immer';
import * as types from '../../constants/referenceTypes';

export const initialState = {
  loading: false,
  error: null,
  referenceList: [],
  referenceDetail: null,
};

const reference = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.GET_MANY_REFERENCE_REQUEST:
        draft.loading = true;
        break;

      case types.GET_MANY_REFERENCE_SUCCESS:
        draft.loading = false;
        draft.referenceList = action.data;
        break;

      case types.GET_MANY_REFERENCE_FAILURE:
        draft.loading = false;
        break;

      case types.GET_ONE_REFERENCE_REQUEST:
        draft.loading = true;
        break;

      case types.GET_ONE_REFERENCE_SUCCESS:
        draft.loading = false;
        draft.referenceDetail = action.data;
        break;

      case types.GET_ONE_REFERENCE_FAILURE:
        draft.loading = false;
        break;

      default:
        return state;
    }
  });
};

export default reference;

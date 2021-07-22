import produce from 'immer';
import * as types from '../../constants/useCaseTypes';

export const initialState = {
  loading: false,
  error: null,
  usecaseList: [],
  usecaseDetail: null,
};

const reference = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.GET_MANY_USECASE_REQUEST:
        draft.loading = true;
        break;

      case types.GET_MANY_USECASE_SUCCESS:
        draft.loading = false;
        draft.usecaseList = action.data;
        break;

      case types.GET_MANY_USECASE_FAILURE:
        draft.loading = false;
        break;

      case types.GET_ONE_USECASE_REQUEST:
        draft.loading = true;
        break;

      case types.GET_ONE_USECASE_SUCCESS:
        draft.loading = false;
        draft.usecaseDetail = action.data;
        break;

      case types.GET_ONE_USECASE_FAILURE:
        draft.loading = false;
        break;

      default:
        return state;
    }
  });
};

export default reference;

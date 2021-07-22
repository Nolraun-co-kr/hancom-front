import * as types from '../../constants/useCaseTypes';

export const getManyUsecaseRequest = params => {
  return {
    type: types.GET_MANY_USECASE_REQUEST,
    params,
  };
};

export const getManyUsecaseSuccess = () => {
  return {
    type: types.GET_MANY_USECASE_SUCCESS,
  };
};

export const getManyUsecaseFailure = () => {
  return {
    type: types.GET_MANY_USECASE_FAILURE,
  };
};

export const getOneUsecaseRequest = params => {
  return {
    type: types.GET_ONE_USECASE_REQUEST,
    params,
  };
};

export const getOneUsecaseSuccess = () => {
  return {
    type: types.GET_ONE_USECASE_SUCCESS,
  };
};

export const getOneUsecaseFailure = () => {
  return {
    type: types.GET_ONE_USECASE_FAILURE,
  };
};

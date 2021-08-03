import * as types from '../../constants/referenceTypes';

export const getManyReferenceRequest = params => {
  console.log(params)
  return {
    type: types.GET_MANY_REFERENCE_REQUEST,
    params,
  };
};

export const getManyReferenceSuccess = () => {
  return {
    type: types.GET_MANY_REFERENCE_SUCCESS,
  };
};

export const getManyReferenceFailure = () => {
  return {
    type: types.GET_MANY_REFERENCE_FAILURE,
  };
};

export const getOneReferenceRequest = params => {
  return {
    type: types.GET_ONE_REFERENCE_REQUEST,
    params,
  };
};

export const getOneReferenceSuccess = () => {
  return {
    type: types.GET_ONE_REFERENCE_SUCCESS,
  };
};

export const getOneReferenceFailure = () => {
  return {
    type: types.GET_ONE_REFERENCE_FAILURE,
  };
};

export const postUseReferenceRequest = () => {
  return {
    type: types.POST_USE_REFERENCE_REQUEST,
  };
};

export const postUseReferenceSuccess = () => {
  return {
    type: types.POST_USE_REFERENCE_SUCCESS,
  };
};

export const postUseReferenceFailure = () => {
  return {
    type: types.POST_USE_REFERENCE_FAILURE,
  };
};

export const actionTypes = {
  // tab 1
  GET_TAB1_DATA_REQUEST: 'GET_TAB1_DATA_REQUEST',
  GET_TAB1_DATA_SUCCESS: 'GET_TAB1_DATA_SUCCESS',
  GET_TAB1_DATA_FAIL: 'GET_TAB1_DATA_FAIL',

  // tab 2
  GET_TAB2_DATA_REQUEST: 'GET_TAB2_DATA_REQUEST',
  GET_TAB2_DATA_SUCCESS: 'GET_TAB2_DATA_SUCCESS',
  GET_TAB2_DATA_FAIL: 'GET_TAB2_DATA_FAIL',
};

// tab 1
export const getTab1Data = () => ({
  type: actionTypes.GET_TAB1_DATA_REQUEST,
})

export const getTab1DataFail = error => ({
  type: actionTypes.GET_TAB1_DATA_FAIL,
  payload: error,
})

export const getTab1DataSuccess = response => ({
    type: actionTypes.GET_TAB1_DATA_SUCCESS,
    payload: response,
})

// tab 2
export const getTab2Data = () => ({
  type: actionTypes.GET_TAB2_DATA_REQUEST,
})

export const getTab2DataFail = error => ({
  type: actionTypes.GET_TAB2_DATA_FAIL,
  payload: error,
})

export const getTab2DataSuccess = response => ({
    type: actionTypes.GET_TAB2_DATA_SUCCESS,
    payload: response,
})

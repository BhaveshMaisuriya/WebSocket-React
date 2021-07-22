import { actionTypes } from './action';

const initialState = {
    tab1: null,
    tab2: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_TAB1_DATA_SUCCESS:
            return {
                ...state,
                tab1: action.payload,
            };
        case actionTypes.GET_TAB1_DATA_FAIL:
            return {
                ...state,
                tab1: action.payload,
            };
        case actionTypes.GET_TAB2_DATA_SUCCESS:
            return {
                ...state,
                tab2: action.payload,
            };
        case actionTypes.GET_TAB2_DATA_FAIL:
            return {
                ...state,
                tab2: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;

import { APPROVE_NFT_REQUEST, APPROVE_NFT_SUCCESS, APPROVE_NFT_FAILURE } from '../constants';

const defaultState = {
    loading: false,
    success: false,
    error: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case APPROVE_NFT_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case APPROVE_NFT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
            };
        case APPROVE_NFT_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
            };
        default:
            return state;
    }
};

export default reducer;
import { CARD_FLIP } from '../actions/types';

const INITIAL_STATE = {
    backface: false,
    px: '320px'
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case CARD_FLIP:
            return { 
                ...state, 
                px: action.flipped ? '720px' : '320px'
            };
        default:
            return state;   
    }
};
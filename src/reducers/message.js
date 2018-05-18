import * as msg from './../constants/Message';
import * as types from './../constants/ActionType';

var initialState = msg.MSG_WELCOME;

var message = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            state = action.message;
            return state;
        default: return state;
    }
}

export default message;
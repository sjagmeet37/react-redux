
import {createStore} from 'redux';

const initialState = {
    counter : 0,
    showCounter : true 
}

const reducer = (state = initialState, action) => {

    if(action.type === 'increment') {
        return {
            counter : state.counter + 1,
            showCounter : state.showCounter
        }
    } else if (action.type === 'decrement') {
        return {
            counter : state.counter - 1,
            showCounter : state.showCounter
        }
    } else if (action.type === 'increase') {
        return {
            counter : state.counter + action.amount,
            showCounter : state.showCounter
        }
    }  else if (action.type === 'toggleCounter') {
        return {
            counter : state.counter,
            showCounter : !state.showCounter
        }
    }

    return state;

}

const store = createStore(reducer);

export default store;
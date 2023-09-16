
import {createStore} from 'redux';


const reducer = (state = {
    counter : 0 
}, action) => {

    if(action.type === 'increment') {
        return {
            counter : state.counter + 1
        }
    } else if (action.type === 'decrement') {
        return {
            counter : state.counter - 1
        }
    }
    console.log(action)
    console.log(state)

    console.log(state.counter)
    return state;

}

const store = createStore(reducer);

export default store;
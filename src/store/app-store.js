
import createStore from 'redux';


const reducer = (state = {
    counter : 0 
}, action) => {

    if(action === 'increment') {
        return {
            counter : counter + 1
        }
    } else if (action === 'decrement') {
        return {
            counter : counter - 1
        }
    }

    return state;

}

const store = createStore(reducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.dispatch({type : 'increment'});

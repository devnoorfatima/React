import {createStore} from 'redux';
const Store = createStore((state = {count : 0}, action) => {
switch (action.type){
    case 'INCREMENT':
     return {
        count : state.count + 1
    };

    case 'DECREMENT':
     return {
        count : state.count - 1
    };
    
    default:
    return state;
}   
});
console.log(Store.getState());

Store.dispatch(
    {
        type: 'INCREMENT'
    }
);


Store.dispatch(
    {
        type: 'DECREMENT'
    }
);

console.log(Store.getState());

export default Store;
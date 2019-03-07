import {createStore} from 'redux';
// Destructuring  objects
// const book= {
//     title : "hello",
//     author: "finny",
//     publisher:{
//         name: 'blu'
//     }
// };

// const {name = 'self-published'}= book.publisher;
// console.log(name);

// Destructuring  objects
// const  item = ["coffee(iced)","$2","$2.50","$2.75"];
// const [coffee, ,medium, ] = item
// console.log(`A medium ${coffee} costs ${medium}.`)


const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const decrementCount = (decrementBy=1) => ({
    type:'DECREMENT',
    decrementBy
});


const reset = () => ({
    type:'RESET'
});


const set = ({count}) => ({
    type:'SET',
    count
});

const countRedeucer = (state = {count : 0}, action) => {
    switch (action.type){
    case 'INCREMENT':
    return {
        count : state.count + action.incrementBy
    };

case 'SET':
    return {
        count : action.count
    };
    
   //Reset 

   case 'RESET':
   return {
      count : 0
  };


    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
     return {
        count : state.count - decrementBy
    };
    
    default:
    return state;
}   
}
const Store = createStore(countRedeucer);

Store.subscribe(()=> {
console.log(Store.getState());
})
// Store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
// );

Store.dispatch(incrementCount({incrementBy:5}))
Store.dispatch(incrementCount());
Store.dispatch(reset());


Store.dispatch(decrementCount({decrementBy : 10}));


Store.dispatch(decrementCount());


Store.dispatch(set({count:101}));
export default Store;
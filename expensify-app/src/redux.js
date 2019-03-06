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
const  item = ["coffee(iced)","$2","$2.50","$2.75"];
const [coffee, ,medium, ] = item
console.log(`A medium ${coffee} costs ${medium}.`)

const Store = createStore((state = {count : 0}, action) => {
switch (action.type){
    case 'INCREMENT':
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    return {
        count : state.count + incrementBy
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
});

Store.subscribe(()=> {
console.log(Store.getState());
})
Store.dispatch(
    {
        type: 'INCREMENT',
        incrementBy: 5
    }
);

Store.dispatch(
    {
        type: 'INCREMENT'
    }
);
Store.dispatch(
    {
        type: 'RESET'
    }
);


Store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy : 10
    }
);


Store.dispatch(
    {
        type: 'DECREMENT'
    }
);
export default Store;
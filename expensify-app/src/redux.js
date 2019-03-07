import {createStore , combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id:'123456',
        description:'August treat ',
        note:'This is the final expense.',
        amount:54214,
        createdAt:0
    }],
    filters: {
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};
export default createStore;
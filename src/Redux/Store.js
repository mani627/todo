


// 
import { combineReducers, createStore } from 'redux';
import { add_To_Do } from './Reducer';



export const reducers_presist=combineReducers({
    add_To_Do:add_To_Do
    

})




export const store=createStore(reducers_presist,{});
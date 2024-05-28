// import { createStore } from "redux";
import {configureStore,createSlice} from '@reduxjs/toolkit'
import { act } from 'react';
const INITIAL_VALUE={
    counter:0
}
// const counterReducer=(store=INITIAL_VALUE,action)=>{
//     let newStore=store;
//     if(action.type==='INCREMENT'){
//         newStore={counter:store.counter+1}
//     }
//     else if(action.type==='DECREMENT'){
//         newStore={counter:store.counter-1}
//     }
//     else if(action.type==='ADDITION'){
//         newStore={counter:store.counter+Number(action.payload.number)}
//     }
//     else if(action.type==='SUBSTRACTION'){
//         newStore={counter:store.counter-Number(action.payload.number)}
//     }
// return newStore;
// }

const counterSlice=createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{

        increment:(state)=>{
            state.counterVal++;

        },
        decrement:(state)=>{
            state.counterVal--;

        },
        add:(state,action)=>{
            state.counterVal+=Number(action.payload);
        },
        substract:(state,action)=>{
            state.counterVal-=Number(action.payload)
        }
    }
})
const counterStore=configureStore({reducer:{
   counter: counterSlice.reducer

}})
export const counterActions=counterSlice.actions;
export default counterStore;

const redux=require('redux')//import redux 
const INITIAL_VALUE={
    counter:0
};
const reducer=(store=INITIAL_VALUE,action)=>{ //reducers  
    let newStore=store
    if(action.type==='INCREMENT'){
        newStore={
            counter:store.counter+1
        }
    }
    if(action.type==='DECREMENT'){
        newStore={counter:store.counter-1}
    }
    if(action.type==='ADDITION'){
        newStore={counter:store.counter+action.payload.number}
    }
    return newStore;
    
}


const store=redux.createStore(reducer)
const subscriber=()=>{
    const state=store.getState();
    console.log(state)
}
store.subscribe(subscriber);
store.dispatch({type:'INCREMENT'}) // actions
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'ADDITION',payload:{number:8}})




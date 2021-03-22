const redux = require('redux');
// untuk store
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17,
}
// reducers
// fungsi yg mana store ini adalah value yg bisa diupdate oleh reducers
// intinya buat update store atau state global
const rootReducer = (state = initialState, action) => {
    // console.log(action)
    switch(action.type){
        case 'ADD_AGE':
            return{
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE' :
            return{
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}

// store 
// menyimpan state secara global
const store = createStore(rootReducer);
console.log(store.getState());
// subscription
// proses pemanggilan store yg kita perlukan
store.subscribe(() => {
    console.log('store change : ', store.getState())
})


// dispatch / action
// proses pemanggilan sebuah intruksi yg disediakan oleh reducers
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log(store.getState())


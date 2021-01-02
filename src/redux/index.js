import redux, {createStore, combineReducers} from 'redux';

export const addMovie = title => {
    return {
        type: "ADD_MOVIE",
        payload: title
    }
}

// // Combine all reducers into single state tree
// const rootReducer = combineReducers({
//     movies: movieReducer,
//     tvShows: tvShowReducer
// });

function reducer(state = ['Hello World', 'Hi World!'], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            // Concat will return a new array. Using .push() will return a length, but push the item into the array. This was used for testing.
            return state.concat(action.payload)
        default:
            return state
    }
}

// Create the store, subscribe to the changes (log them in console every time it updates for easy debugging).
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

// Export the store.
export default store

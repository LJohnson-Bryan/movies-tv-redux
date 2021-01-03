import redux, {createStore, combineReducers} from 'redux';
import {movieReducer} from './movies';

// Combine all reducers into single state tree
const rootReducer = combineReducers({
    movies: movieReducer
});

// Create the store, subscribe to the changes (log them in console every time it updates for easy debugging).
const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

// Export the store.
export default store

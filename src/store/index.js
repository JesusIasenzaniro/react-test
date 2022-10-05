import { createStore, combineReducers } from 'redux';
import yourReducerName from './yourActionName/reducer';

const reducers = combineReducers({
    yourReducerName,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

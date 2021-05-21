import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import candidateReducer from './reducers/candidateReducer';
import auditionReducer from './reducers/auditionReducer'

const rootReducer = combineReducers({
    candidate: candidateReducer,
    audition: auditionReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store
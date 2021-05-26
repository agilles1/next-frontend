import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import auditionReducer from './reducers/auditionReducer'
import auditionsReducer from './reducers/auditionsReducer'

const rootReducer = combineReducers({
    audition: auditionReducer, 
    auditions: auditionsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store
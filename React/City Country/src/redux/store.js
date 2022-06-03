
import {legacy_createStore as createStore ,applyMiddleware , combineReducers} from 'redux'

import thunk from 'redux-thunk'

import {cityReducer} from './City/reducer'
import { countryReducer } from './Country/reducer'

const rootReducer = combineReducers({
    city:cityReducer,
    country:countryReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk) )
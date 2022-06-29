import {createStore,applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'

import { Map } from 'immutable'

const sagaMiddleware = createSagaMiddleware()

import reducer from './reducer'
import sagas from './sagas'

const store = createStore(
    reducer,
    Map(),
    applyMiddleware(sagaMiddleware)
)

// sagaMiddleware.run(sagas)
sagas.forEach(value => {
    sagaMiddleware.run(value)
})

export default store
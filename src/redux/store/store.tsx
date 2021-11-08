import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import episodeReducer from '../reducer/episodeReducer'
import rootSaga from '../saga/saga'

// 創建middleware
const sagaMiddleware = createSagaMiddleware()

// 創建store，並且加入reducer及middleware
const store = createStore(
    episodeReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
// 執行訂閱事件的saga
sagaMiddleware.run(rootSaga)

export default store
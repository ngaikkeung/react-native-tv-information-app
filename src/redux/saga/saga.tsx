import { all } from 'redux-saga/effects'
import episodeSaga from '../action/episodeAction'

function* rootSaga() {
    yield all([episodeSaga()])
}

export default rootSaga

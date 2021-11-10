import { all } from 'redux-saga/effects'
import episodeSaga from './episodeSaga'

function* rootSaga() {
    yield all([episodeSaga()])
}

export default rootSaga

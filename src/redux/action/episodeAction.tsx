import { Episode } from "../../asset/Episode"
import { call, put, takeEvery } from 'redux-saga/effects'

export const GET_ALL_EPISODE_BEGIN = 'GET_ALL_EPISODE_BEGIN'
export const getAllEpisodeBegin = () => ({
    type: GET_ALL_EPISODE_BEGIN
})

export const GET_ALL_EPISODE_SUCCESS = 'GET_ALL_EPISODE_SUCCESS'
export const getAllEpisoSuccess = (allEpisode: Array<Episode>) => ({
    type: GET_ALL_EPISODE_SUCCESS,
    payload: {
        allEpisode
    }
})

function* getEpisode() {
    // 在generator function(*)內yield可以在先停在這，配合call執行非同步操作等到拿到資料才繼續跑
    const data: Array<Episode> = yield call(() => {
        const dateInISO = new Date().toISOString().substring(0, 10);
        const countryCode = "jp";

        return fetch(`https://api.tvmaze.com/schedule?date=${dateInISO}&country=${countryCode}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json());
    })

    yield put(getAllEpisoSuccess(data))
    // 使用put觸發下一個action，將取完的資料送入reducer
}

function* episodeSaga() {
    yield takeEvery(GET_ALL_EPISODE_BEGIN, getEpisode)
}
// takeEvery使得接到GET_ALL_EPISODE_BEGIN時觸發getEpisode

export default episodeSaga

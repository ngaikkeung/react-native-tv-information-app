import { GET_ALL_EPISODE_SUCCESS } from "../action/type"
import { Episode } from "../../asset/Episode"

const initState: {
    allEpisode: Array<Episode>,
    isLoading: boolean
} = {
    allEpisode: [],
    isLoading: true
}

const episodeReducer = (state = initState, action: any) => {
    switch (action.type) {
        case GET_ALL_EPISODE_SUCCESS:
            return {
                ...state,
                allEpisode: action.payload?.allEpisode,
                isLoading: false
            }
        default:
            return state
    }
}

export default episodeReducer
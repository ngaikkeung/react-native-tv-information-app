import * as episodeActions from "../action/episodeAction"
import { Episode } from "../../asset/Episode"

const initState: { allEpisode: Array<Episode> } = { allEpisode: [] }

const episodeReducer = (state = initState, action: any) => {
    switch (action.type) {
        case episodeActions.GET_ALL_EPISODE_SUCCESS:
            return { allEpisode: action.payload?.allEpisode }
        default:
            return state
    }
}

export default episodeReducer
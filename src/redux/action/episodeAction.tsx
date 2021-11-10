import { Episode } from "../../asset/Episode"
import {
    GET_ALL_EPISODE_BEGIN,
    GET_ALL_EPISODE_SUCCESS
} from "./type"

export const getAllEpisodeBegin = () => ({
    type: GET_ALL_EPISODE_BEGIN
})

export const getAllEpisoSuccess = (allEpisode: Array<Episode>) => ({
    type: GET_ALL_EPISODE_SUCCESS,
    payload: {
        allEpisode
    }
})

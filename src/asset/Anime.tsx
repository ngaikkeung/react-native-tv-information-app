export interface Anime {
    title: string
    imgLink: string
    day: string
    time: string
    id: string
    type: []
    introduce: string
    isFavourite: boolean
    isReminding: boolean
    rate: number
    video?: {
        baha?: { link: string, episode: number }
        muse?: { link: string, episode: number }
    }
}
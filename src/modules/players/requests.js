import Axios from 'axios'

const apiUrl = "http://dev.api.mixbrgames.com/players/"

export const fetchPlayers = () => {
    return Axios.get(apiUrl)
}

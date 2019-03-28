import axios from 'axios'
const secret = require("../secret.json")


export const getAllSongs = () => {
  return axios.get(`http://api.napster.com/v2.2/playlists/pp.125821370/tracks?apikey=${secret["apiKey"]}&limit=15&offset=15`)
}

import axios from 'axios';

const token = 'BQDJwp9VHWl0gG_YRpn8D0thJjEj_TNP4p3mZ_CloX3uglUt_c1qChxZYD2S6gM6H9khe8Oz-Lj8tQcF_HjN2y-hZ6nnTlAzKQS2QuCSlwXEfACvQm9AHgdYMr1k-h6wjsh0i-rAnoT0QL3a7Uy5EQOmsVlnL0AxZanY4QhEMJk';

export default class SpotifyService {

    static async getTracks(ids) {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/tracks?ids=${ids}`, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const json = response.data.tracks.map((song) => {
                return {
                    id: song.id,
                    name: song.name,
                    // image: response.data.images[1],
                    author: song.artists[0].name
                }
            })
            return json;
        } catch (e) {
            console.log(e);
        }
    }

    static async getNewReleases() {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/browse/new-releases`, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const json = response.data.albums.items.map((item) => {
                if (item.album_type == 'single') {
                    return {
                        id: item.id,
                        name: item.name,
                        images: item.images,
                        authors: item.artists.map((artist) => artist.name),
                    }
                }
            }).filter((item) => item != undefined)
            return json;
        } catch (e) {
            console.log(e);
        }
    }
}


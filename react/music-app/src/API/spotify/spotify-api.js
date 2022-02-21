import axios from 'axios';

export default class SpotifyService {

    // static async getTracks(ids) {
    //     try {
    //         const response = await axios.get(`https://api.spotify.com/v1/tracks?ids=${ids}`, {
    //             headers: {
    //                 'Authorization': 'Bearer ' + token,
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //             }
    //         });
    //         const json = response.data.tracks.map((song) => {
    //             return {
    //                 id: song.id,
    //                 name: song.name,
    //                 // image: response.data.images[1],
    //                 author: song.artists[0].name
    //             }
    //         })
    //         return json;
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    static async getNewReleases(access_token, offset) { // truncated functionality, used as example
        try {
            const off_value = offset || 0;
            const response = await axios.get(`https://api.spotify.com/v1/browse/new-releases?offset=${off_value}`, {
                headers: {
                    'Authorization': access_token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const json = response.data.albums.items.map((item) => {
                if (item.album_type === 'single') {
                    return {
                        id: item.id,
                        name: item.name,
                        images: item.images,
                        artists: item.artists.map((artist) => {
                            return ({
                                name: artist.name,
                                href: artist.href,
                                id: artist.id,
                            })
                        }),
                    }
                }
            }).filter((item) => item !== undefined);

            return json;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static async getArtistById(access_token, id) {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
                headers: {
                    'Authorization': access_token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getArtistTopTracks(access_token, id) {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
                headers: {
                    'Authorization': access_token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            const json = response.data.tracks;

            return json;
        } catch (error) {
            console.log(error);
        }
    }
}


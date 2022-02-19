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

    static async getNewReleases(access_token) {
        try {
            const response = await axios.get(`https://api.spotify.com/v1/browse/new-releases`, {
                headers: {
                    'Authorization': access_token,
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
                        authors: item.artists.map((artist) => {
                            return ({
                                name: artist.name,
                                href: artist.href,
                                id: artist.id,
                            })
                        }),
                    }
                }
            }).filter((item) => item != undefined);

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

            console.log(response.data);
        } catch (error) {

        }
    }
}


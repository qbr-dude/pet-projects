import axios from 'axios';
import qs from 'qs';

export default class SpotifyAuth {

    static client_secret = '5ff84c5016cb46eb842551e9df91b331';
    static client_id = '3ed87322b34f416ebb50161478d71077';

    static async getAccessToken() {

        const data = {
            grant_type: 'client_credentials',
        };

        try {
            const response = await axios.post(
                'https://accounts.spotify.com/api/token',
                qs.stringify(data),
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    auth: {
                        username: SpotifyAuth.client_id,
                        password: SpotifyAuth.client_secret,
                    },
                }
            );

            return (response.data.token_type + ' ' + response.data.access_token);
        } catch (error) {
            console.log(error);
        }
    }
}
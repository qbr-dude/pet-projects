import axios from 'axios';
import qs from 'qs';

export default class SpotifyAuth {

    static client_id = '3ed87322b34f416ebb50161478d71077';
    static client_secret = '5ff84c5016cb46eb842551e9df91b331';

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

            return [response.data.access_token, response.data.expires_in, response.data.token_type];
        } catch (error) {
            console.log(error);
        }
    }

    static async refreshAccessToken(refresh_token) {

        console.log(refresh_token);
        const data = {
            grant_type: 'refresh_token',
            refresh_token: refresh_token,
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

            return [(response.data.token_type + ' ' + response.data.access_token), response.data.expires_in];
        } catch (error) {
            console.log(error);
        }
    }
}
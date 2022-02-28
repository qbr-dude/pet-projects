import { useEffect, useState } from "react";
import SpotifyAuth from "../API/spotify/spotify-auth";

/* returns access token */
export const useAuthentication = () => {
    // const [validity, setValidity] = useState(10000);
    const [accessToken, setAccessToken] = useState(null);
    const [tokenType, setTokenType] = useState(null);

    useEffect(() => {
        handleAuth();
    }, []);

    /* needs only for user authorisation */
    // useEffect(() => {
    //     const expireInterval = setInterval(async () => {
    //         const refresh_token = await SpotifyAuth.refreshAccessToken(accessToken);
    //         setAccessToken(refresh_token);
    //     }, validity);

    //     return () => clearInterval(expireInterval);
    // }, [validity]);

    async function handleAuth() {
        const [token, time, token_type] = await SpotifyAuth.getAccessToken();
        setAccessToken(token);
        setTokenType(token_type);
        // setValidity(1000);
    }

    if (accessToken && tokenType)
        return tokenType + ' ' + accessToken;
}
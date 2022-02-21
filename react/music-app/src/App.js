import { Container, Row } from "react-bootstrap";
import Header from "./compnts/header/Header";
import PlayBar from "./compnts/play-bar/play-bar";
import SpotifyAuth from "./API/spotify/spotify-auth";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./pages/app-router";
import { AccessTokenContext } from "./context";


function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    handleAuth();
  }, []);

  async function handleAuth() {
    const token = await SpotifyAuth.getAccessToken();
    setAccessToken(token);
  }

  function handleSongChoice(song) {
    setCurrentSong(song);
  }

  return (
    <AccessTokenContext.Provider value={{ accessToken }}>
      <Router>
        <Container fluid className="bg-main h-100">
          <Row>
            <Header />
          </Row>
          <AppRouter handleSongChoice={handleSongChoice} />
          <PlayBar song={currentSong} />
        </Container>
      </Router>
    </AccessTokenContext.Provider>
  );
}

export default App;
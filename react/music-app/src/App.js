import { Container, Row, Col } from "react-bootstrap";
import Header from "./compnts/header/Header";
import PlayBar from "./compnts/play-bar/play-bar";
import SpotifyAuth from "./API/spotify/spotify-auth";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NewReleases from "./pages/new-releases";
import Artists from "./pages/artists";


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
    <Router>
      <Container fluid className="bg-main h-100">
        <Row>
          <Header />
        </Row>
        <Routes>
          <Route exact path="/new-releases" element={<NewReleases token={accessToken} handleSongChoice={handleSongChoice} />} />
          <Route exact path="/artists/:id" element={<Artists token={accessToken} handleSongChoice={handleSongChoice} />} />
          <Route exact path="/" element={<Navigate exact to="new-releases" />} />
        </Routes>
        <PlayBar song={currentSong} />
      </Container>
    </Router>
  );
}

export default App;
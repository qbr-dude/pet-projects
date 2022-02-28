import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./compnts/header/Header";
import PlayBar from "./compnts/play-bar/play-bar";
import { AccessTokenContext } from "./context";
import { useAuthentication } from "./hooks/useAuthentication";
import AppRouter from "./pages/app-router";


function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const accessToken = useAuthentication();

  function handleSongChoice(song) {
    setCurrentSong(song);
  }

  return (
    <AccessTokenContext.Provider value={{ accessToken }}>
      <Router>
        <Container fluid className="bg-main h-100 min-vh-100">
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
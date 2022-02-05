import { Container, Row, Col } from "react-bootstrap";
import Header from "./compnts/header/Header";
import SideNavigation from "./compnts/side-nav/Side-Navigation";
import MainFrame from './compnts/main-frame/main-frame';
import PlayBar from "./compnts/play-bar/play-bar";
import SpotifyService from "./API/spotify-servise";
import { useEffect, useState } from "react";

const ids = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B'; //for sample

function App() {
  const [songList, setSongList] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetchTracks();
  }, []);



  async function fetchTracks() {
    const tracks = await SpotifyService.getNewReleases();
    setSongList(tracks);
  }

  function handleSongChoice(id) {
    setCurrentSong(songList.filter((song) => id === song.id)[0]);
  }

  return (
    <Container fluid className="bg-main h-100">
      <Row>
        <Header />
      </Row>
      <Row className="d-flex h-100">
        <Col md="2" className="px-0">
          <SideNavigation />
        </Col>
        <Col>
          <MainFrame songList={songList} songChoice={handleSongChoice} />
        </Col>
      </Row>
      <PlayBar song={currentSong} />
    </Container>
  );
}

export default App;
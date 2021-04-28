import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
import Row from './Components/Row/Row';
import requests from './requiest';



function App() {

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title={"NETFLIX ORIGINALS"} fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title={"Tranding"} fetchURL={requests.fetchTranding} />
      <Row title={"Top Rated"} fetchURL={requests.fetcTopRated} />
      <Row title={"Action Movie"} fetchURL={requests.actionMovie} />
      <Row title={"Comedy Movi"} fetchURL={requests.comedyMovie} />
      <Row title={"Horor Movi"} fetchURL={requests.horor} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap'; 
import Navigation from 'Navigation';
import MovieTable from 'MovieTable';
import MovieAccordion from 'MoveAccordion';

function App() {
  return (
<Container>
     <Navigation />
     <MovieTable movies={movies} />
     <MovieAccordion movies={movies} />
</Container>
  );
}

export default App;

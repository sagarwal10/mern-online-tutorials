import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap'; 
import Navigation from 'Navigation';
import MovieTable from 'MovieTable';
import MovieAccordion from 'MoveAccordion';

const [movies, setMovies] = useState([]);
const [err, setErr] = useState("");
const [errBool, setErrBool] = useState(false);
const [loading, setLoading] = useState(true); 

let URL = https://api.themoviedb.org/3/movie/550?api_key=df632ef0878241f1bb9d9f851a1f5bde;

const fetchMovies = (url) => {
  axios.get(url)
       .then(response => {
         setMovies(response.data.results);
	 setLoading(false);
       })
       .catch(err => {
         setErr(err.message);
	 setErrBool(true);
	 setLoading(false);
       });
} 

const fetchMovies = (url) => {
 axios.get(url)
      .then(response => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch(err => {
	setErr(err.message);
	setErrBool(true);
	setLoading(false);
      })
}

useEffect(() => {
  fetchMovies(URL);
}, [URL]);

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

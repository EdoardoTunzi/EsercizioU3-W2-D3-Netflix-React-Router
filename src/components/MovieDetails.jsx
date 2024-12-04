import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const movieId = params.movieId;

  const [movieDetails, setMovieDetails] = useState(null);
  //const [comments, setComments] = useState([]);
  //fetch dettagli film
  const fetchMovieDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=286931b4&i=${movieId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in fetching data from API");
        }
      })
      .then((movie) => {
        console.log(movie);
        setMovieDetails(movie);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //fetch commenti
  //const fetchMovieComments = () => {};
  useEffect(() => {
    if (movieId) {
      fetchMovieDetails();
      //fetchMovieComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {movieDetails ? (
            <div className="text-center border border-light rounded-5 p-5 bg-secondary">
              <img src={movieDetails.Poster} alt={movieDetails.Title} />
              <h1>{movieDetails.Title}</h1>
              <p>Anno: {movieDetails.Year}</p>
              <p>Genere: {movieDetails.Genre}</p>
              <p>Trama: {movieDetails.Plot}</p>
            </div>
          ) : (
            <Spinner animation="border" role="status" variant="danger" className="d-block mx-auto my-3">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;

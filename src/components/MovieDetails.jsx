import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const movieId = params.movieId;

  return (
    <Container>
      <Row>
        <Col>
          <h1>Titolo film</h1>
          <p>MOvie ID: {movieId}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;

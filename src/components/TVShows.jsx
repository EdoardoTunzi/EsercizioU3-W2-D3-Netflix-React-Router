import MovieGallery from "./MoviesGallery";

const TVShows = () => {
  return (
    <div>
      <MovieGallery searchQuery="cartoons" name="Cartoni per bambini" />
      <MovieGallery searchQuery="serie" name="Le migliori serie" />
      <MovieGallery searchQuery="south park" name="South Park Collection" />
    </div>
  );
};
export default TVShows;

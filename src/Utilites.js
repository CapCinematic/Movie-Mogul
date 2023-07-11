import PropTypes from 'prop-types'

const MovieTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
};

const SingleMovieTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  budget: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired,
}

const SingleMoviePropTypes = {
  movie: PropTypes.shape({
    ...SingleMovieTypes,
  }).isRequired,
}

const MoviesPropTypes = PropTypes.arrayOf(PropTypes.shape(MovieTypes));

export { MovieTypes, MoviesPropTypes, SingleMoviePropTypes, SingleMovieTypes };
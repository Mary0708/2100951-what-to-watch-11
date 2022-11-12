import { Link } from 'react-router-dom';
import { FilmType } from '../../types/film';
import Videoplayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: FilmType;
  isPlaying: boolean;
  handleFilmMouseEnter: () => void;
  handleFilmMouseOut: () => void;
}

export default function SmallFilmCard({ film, isPlaying, handleFilmMouseEnter, handleFilmMouseOut }: SmallFilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleFilmMouseEnter}
      onMouseOut={handleFilmMouseOut}
    >
      <div className="small-film-card__image">
        {isPlaying ? '' : <img src={film.posterImg} alt={film.name} width="280" height="175" />}
        <Videoplayer
          src={film.videoLink}
          img={film.posterImg}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}
import React, { useEffect, useState } from 'react';
import PageContainer from 'components/PageContainer';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import { getYear, parseISO } from 'date-fns';
import PosterButtons from 'components/PosterButtons';
import {
  Container,
  Backdrop,
  DetailsContainer,
  InfoContainer,
  Poster,
  Title,
  Description,
  GenreContainer,
  Pill,
  Score,
  Subtitle,
  VideosContainer,
  TitleContainer,
  Video,
} from './styles';


export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    async function getMovie() {
      try {
        const response = await api.get(
          `/movie/${id}?append_to_response=videos`,
        );
        const { data } = response;
        const { videos } = data;
        if (videos.results.length) {
          data.videos = videos.results.filter(
            (video) => video.site === 'YouTube',
          );
        }
        const year = getYear(parseISO(data.release_date));
        data.year = year || 'Unknow year';
        if (!data.overview) {
          data.overview = 'No overview provided.';
        }
        setMovie(data);
      } catch (e) {
        setError(e.message);
      }
    }
    getMovie();
    setLoading(false);
  }, [id]);
  if (loading) {
    return (
      <PageContainer>
        <strong>Loading...</strong>
      </PageContainer>
    );
  }
  if (error) {
    return (
      <PageContainer>
        <strong>{error}</strong>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      {movie && (
        <Container>
          <Backdrop
            background={`${process.env.REACT_APP_TMDB_IMAGE_URL}/original${movie.backdrop_path}`}
          >
            <DetailsContainer>
              <Poster
                src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`}
              />
              <Score>{`${movie.vote_average}/10`}</Score>
              <TitleContainer>
                <Title>
                  {`${movie.original_title} (${movie.year})`}
                  {' '}
                </Title>
                <GenreContainer>
                  <Pill>{`${movie.runtime} min`}</Pill>
                  {' - '}
                  {movie.genres.map((genre) => (
                    <Pill key={genre.id}>{genre.name}</Pill>
                  ))}
                </GenreContainer>
                <PosterButtons movie={movie} />
              </TitleContainer>
            </DetailsContainer>
          </Backdrop>
          <InfoContainer>
            <Subtitle>Overview</Subtitle>
            <Description>{movie.overview}</Description>
            <Subtitle>Trailers</Subtitle>
            <VideosContainer>
              {movie.videos.length ? (
                movie.videos.map((video) => (
                  <Video
                    key={video.key}
                    type="text/html"
                    src={`https://www.youtube.com/embed/${video.key}?autoplay=0`}
                    frameBorder="0"
                    allowFullScreen
                    title="YouTube"
                    className="youtube-player"
                  />
                ))
              ) : (
                <Description>No video found.</Description>
              )}
            </VideosContainer>
          </InfoContainer>
        </Container>
      )}
    </PageContainer>
  );
}

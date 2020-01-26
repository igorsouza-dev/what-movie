import React, { useEffect, useState } from 'react';
import PageContainer from 'components/PageContainer';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import { getYear, parseISO } from 'date-fns';
import {
  Container,
  Backdrop,
  DetailsContainer,
  InfoContainer,
  Poster,
  Title,
  Description,
  GenreContainer,
  Genre,
  Score,
  Subtitle,
  VideosContainer,
  Video,
} from './styles';

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getMovie() {
      try {
        const response = await api.get(
          `/movie/${id}?append_to_response=videos`
        );
        const { data } = response;
        const { videos } = data;
        if (videos.results.length) {
          data.videos = videos.results.filter(
            video => video.site === 'YouTube'
          );
        }
        const year = getYear(parseISO(data.release_date));
        data.year = year || 'Unknow year';
        setMovie(data);
      } catch (e) {}
    }
    getMovie();
    setLoading(false);
  }, [id]);
  if (loading) return <div>Loading...</div>;
  return (
    <PageContainer>
      {movie && (
        <Container>
          <Backdrop
            background={`${process.env.REACT_APP_TMDB_IMAGE_URL}/original${movie.backdrop_path}`}
          />
          <DetailsContainer>
            <Poster
              src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`}
            />
            <Score>{`${movie.vote_average}/10`}</Score>
            <InfoContainer>
              <Title>{`${movie.original_title} (${movie.year})`} </Title>
              <GenreContainer>
                <Genre>{`${movie.runtime}min`}</Genre>
                {' - '}
                {movie.genres.map(genre => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </GenreContainer>
              <Description>{movie.overview}</Description>
              <Subtitle>Trailers</Subtitle>
              <VideosContainer>
                {movie.videos.map(video => (
                  <Video
                    key={video.key}
                    type="text/html"
                    src={`http://www.youtube.com/embed/${video.key}?autoplay=0`}
                    frameBorder="0"
                  />
                ))}
              </VideosContainer>
            </InfoContainer>
          </DetailsContainer>
        </Container>
      )}
    </PageContainer>
  );
}

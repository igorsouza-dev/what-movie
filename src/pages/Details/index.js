import React, { useEffect, useState } from 'react';
import PageContainer from 'components/PageContainer';
import { useParams } from 'react-router-dom';
import api from 'services/api';

import { Container } from './styles';

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
        console.log(response.data);
        setMovie(response.data);
      } catch (e) {}
    }
    getMovie();
    setLoading(false);
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <PageContainer>
      <Container
        background={
          movie &&
          `${process.env.REACT_APP_TMDB_IMAGE_URL}/original${movie.backdrop_path}`
        }
      >
        {movie && (
          <>
            <h1>{movie.original_title}</h1>
          </>
        )}
      </Container>
    </PageContainer>
  );
}

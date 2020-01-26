import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: 100%;
`;

export const Backdrop = styled.div`
  background: url(${props => props.background});
  width: 100%;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: -45px 40px 0 40px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  position: relative;
`;
export const Score = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 6px;
`;
export const InfoContainer = styled.div`
  margin-left: 10px;
`;
export const Poster = styled.img`
  height: 185px;
`;
export const GenreContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;
export const Genre = styled.div`
  border-radius: 4px;
  background: #363636;
  color: #eee;
  font-size: 12px;
  width: max-content;
  padding: 2px;
  margin: 2px;
`;
export const Title = styled.h2`
  max-width: 90%;
`;
export const Subtitle = styled.h3``;

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Video = styled.iframe`
  width: 640px;
  height: 300px;
  margin: 10px;
}
`;
export const Description = styled.p``;

import styled from 'styled-components';
import { screenSize } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Backdrop = styled.div`
  background: url(${(props) => props.background});
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px 4px 0 0;
  display: flex;
  flex-direction: column;
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  padding: 10px;
  background: rgba(255,255,255,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    max-width: 300px;

    button {
      border-radius: 4px;
      margin: 2px;
    }
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.6);
  padding: 10px;
  position: relative;
  height: 100%;
  width: 100%;
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
export const TitleContainer = styled.div`
  margin-left: 10px;
`;
export const InfoContainer = styled.div`
  background: #fff;
  padding: 10px;
  width: 100%;
  border-radius: 0 0 4px 4px;
`;
export const Poster = styled.img`
  height: 185px;
  background: #ddd;
  border-radius: 4px;
  border: 0;
  outline: 0;
`;
export const GenreContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  flex-wrap: wrap;
`;
export const Pill = styled.div`
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
export const Subtitle = styled.h3`
  margin-top: 10px;
`;

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Video = styled.iframe`
  margin: 10px;
  width: 100%;
  @media only screen and (max-width: ${screenSize.mobileS}) {
    width: 250px;
    height: 120px;
  }
  @media only screen and (min-width: 321px) and (max-width: ${screenSize.mobileM}) {
    width: 300px;
    height: 140px;
  }
  @media only screen and (min-width: 376px) and (max-width: ${screenSize.mobileL}) {
    width: 336px;
    height: 157px;
  }
  @media only screen and (min-width: 426px) and (max-width: 767px)  {
    width: 386px;
    height: 181px;
  }
  @media only screen and (min-width: 768px) and (max-width: ${screenSize.laptop})  {
    width: 728px;
    height: 341px;
  }
  @media only screen and (min-width: 1025px) {
    width: 980px;
    height: 460px;
  }
`;

export const Description = styled.p``;

import styled from 'styled-components';
import { device, screenSize } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: 100%;
  padding: 10px;

  @media only screen and (${device.mobileS}) {
    max-width: ${screenSize.mobileS};
  }
  @media only screen and (${device.mobileM}) {
    max-width: ${screenSize.mobileM};
  }
  @media only screen and (${device.mobileL}) {
    max-width: ${screenSize.mobileL};
  }
  @media only screen and (${device.tablet}) {
    max-width: ${screenSize.tablet};
  }
  @media only screen and (${device.laptop}) {
    max-width: ${screenSize.laptop};
  }
  @media only screen and (${device.laptopL}) {
    max-width: ${screenSize.laptopL};
  }
  @media only screen and (${device.desktop}) {
    max-width: ${screenSize.desktop};
  }
`;

export const Backdrop = styled.div`
  background: url(${props => props.background});
  width: 100%;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px 4px 0 0;
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
  @media only screen and (${device.mobileS}) {
    width: 280px;
    max-width: 280px;
    height: 130px;
    max-height: 130px;
  }
  @media only screen and (${device.mobileM}) {
    width: 335px;
    height: 160px;
    max-width: 335px;
    max-height: 160px;
  }
  @media only screen and (${device.mobileL}) {
    width: 385px;
    height: 180px;
  }
  @media only screen and (${device.tablet}) {
    width: 728px;
    height: 340px;
    max-width: 728px;
    max-height: 340px;
  }
  @media only screen and (${device.laptop}) {
    width: 984px;
    height: 460px;
  }
`;
export const Description = styled.p``;

import styled from 'styled-components';
import { darken } from 'polished';
import { posterSize, colors } from 'styles/variables';

export const Container = styled.div`
  width: 100%;
  max-width: ${posterSize}px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
  transition: box-shadow 0.5s ease-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.7);
  }
`;

export const NameContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px;
  overflow: hidden;
  max-width: ${posterSize}px;
  strong {
    text-align: center;
    text-overflow: ellipsis;
  }
`;
export const Score = styled.div`
  background: rgba(0, 0, 0, 0.7);
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
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
`;
export const Button = styled.button`
  border: 0;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.buttons};
  font-weight: bold;
  &:hover {
    background: ${darken(0.03, colors.buttons)};
  }
`;

export const WatchLater = styled(Button)`
  flex: 1;
  border-radius: 0 0 0 4px;
  span {
    margin-left: 5px;
  }
`;
export const Favorite = styled(Button)`
  padding: 12px;
  border-radius: 0 0 4px 0;
`;
export const NoPoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${posterSize}px;
  height: 278px;
  background: #ddd;
`;
export const ImgContainer = styled.div`
  width: ${posterSize}px;
  min-height: 278px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background: #ddd;
  img {
    height: 278px;
  }
`;

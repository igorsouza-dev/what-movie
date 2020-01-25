import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
  &:hover {
    cursor: pointer;
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
  max-width: 185px;
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
  background: #6565ff;
  font-weight: bold;
  &:hover {
    background: ${darken(0.03, '#6565ff')};
  }
`;

export const WatchLater = styled(Button)`
  flex: 1;
  border-radius: 0 0 0 4px;
`;
export const Favorite = styled(Button)`
  padding: 12px;
  border-radius: 0 0 4px 0;
`;
export const NoPoster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 278px;
  background: #ddd;
`;
export const ImgContainer = styled.div`
  width: 185px;
  min-height: 278px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  img {
    height: 278px;
  }
`;

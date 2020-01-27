import styled from 'styled-components';
import { darken } from 'polished';
import { posterSize, colors } from 'styles/variables';

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

import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  border: 0;
  border-radius: 4px 0 0 4px;
  background: #eee;
  padding: 5px 10px;
  height: ${(props) => (props.small ? '30px' : '40px')};
  color: #333;
  font-weight: bold;
  &::placeholder {
    color: #bbb;
    font-weight: bold;
    font-size: 14px;
  }
`;
export const Button = styled.button`
  max-width: 60px;
  border: 0;
  border-radius: 0 4px 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.buttons};
  height: ${(props) => (props.small ? '30px' : '40px')};
`;

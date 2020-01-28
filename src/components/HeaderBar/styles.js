import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;
  position: fixed;
  padding: 10px;
  top: 0;
  background: ${colors.header};
  z-index: 10;
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.3);

  form {

    input {

      @media only screen and (min-width: 300px) {
        font-size: 12px;
        &::placeholder {
          font-size: 10px;
        }
      }
      @media only screen and (min-width: 768px) {
        font-size: 14px;
        &::placeholder {
          font-size: 12px;
        }
      }
    }

    button {
      margin-right: 10px;
      @media only screen and (min-width: 300px) {
        padding: 2px;
        svg {
          height: 20px;
          width: 20px;
        }
      }
      @media only screen and (min-width: 768px) {
        padding: 5px;
        svg {
          height: 24px;
          width: 24px;
        }
      }
    }
  }
`;

export const LinkContainer = styled(Link)`

  h1 {
    font-size: 16px;
    width: 55px;
    transition: text-shadow 0.5s ease-out;
    margin-right: 10px;
    &:hover {
      text-shadow: 0 2px 8px #000;
    }
    @media only screen and (max-width: 320px) {
      font-size: 16px;
      width: 55px;
    }
    @media only screen and (min-width: 321px) and (max-width: 480px) {
      font-size: 18px;
      width: 80px;
    }
    @media only screen and (min-width: 481px) and (max-width: 640px) {
      font-size: 24px;
      width: 150px;
    }
    @media only screen and (min-width: 641px) and (max-width: 768px) {
      font-size: 30px;
      width: 200px;
    }
    @media only screen and (min-width: 769px) {
      font-size: 34px;
      width: 250px;
    }
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  background: #772f2f;
  z-index: 10;
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.3);
`;

export const LinkContainer = styled(Link)`
  width: 100%;
`;

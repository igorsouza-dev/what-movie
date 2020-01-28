import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: 0;
  padding: 5px;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;
`;

export const Notification = styled.div`
  bottom: 10px;
  right: -4px;
  position: absolute;
  border-radius: 50%;
  background: #435058;
  font-weight: bold;
  color: #fff;
  padding: 2px;
  font-size: 10px;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

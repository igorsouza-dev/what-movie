import styled from 'styled-components';
import { screenSize } from 'styles/variables';

const drawerSize = 300;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding-top: 80px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  max-width: 900px;

  @media only screen and (max-width: ${screenSize.mobileS}) {
    max-width: 100%;
  }
  @media only screen and (min-width: 321px) and (max-width: ${screenSize.mobileM}) {
    max-width: ${screenSize.mobileM};
  }
  @media only screen and (min-width: 376px) and (max-width: ${screenSize.mobileL}) {
    max-width: ${screenSize.mobileL};
  }
  @media only screen and (min-width: 426px) and (max-width: 767px)  {
    max-width: 767px;
  }
  @media only screen and (min-width: 768px) and (max-width: ${screenSize.laptop})  {
    max-width: ${screenSize.laptop};
  }
  @media only screen and (min-width: 1025px) {
    max-width: ${screenSize.desktop};
  }
`;

export const DrawerList = styled.div`
  position: fixed;
  top: 55px;
  right: ${(props) => (props.show ? '0' : `-${drawerSize}px`)};
  height: 100%;
  z-index: 9;
  width: ${drawerSize}px;
  background: #fff;
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

export const ListItem = styled.li`
  padding: 10px;
  width: 100%;
  &:hover {
    cursor: pointer;
    background: #ddd;
  }
`;

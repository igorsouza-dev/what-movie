import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderBar from 'components/HeaderBar';
import Footer from 'components/Footer';
import {
  Container, Content, DrawerList, ListItem
} from './styles';

function PageContainer({ children }) {
  const showList = useSelector((state) => state.showList);
  const items = useSelector((state) => {
    if (showList === 'favorites') {
      return state.favorites;
    }
    return state.watchLater;
  });
  const itemsKeys = Object.keys(items);
  return (
    <Container>
      <HeaderBar />
      <DrawerList show={showList}>
        <h3>{showList === 'watchLater' ? 'Watch Later' : 'Favorites'}</h3>
        <ul>
          {itemsKeys.length
            ? itemsKeys.map((key) => (
              <Link to={`/details/${key}`} key={key}>
                <ListItem>{items[key].original_title}</ListItem>
              </Link>
            ))
            : 'No movies added.'}
        </ul>
      </DrawerList>
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;

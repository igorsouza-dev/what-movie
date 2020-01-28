import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, Button, PageText } from './styles';

function Paginator({
  previousPage, nextPage, page, totalPages,
}) {
  return (
    <Container>
      <Button type="button" onClick={previousPage} data-testid="prev-button">
        <FaChevronLeft color="#fff" size={48} />
      </Button>
      <PageText>{`Page ${page}/${totalPages}`}</PageText>
      <Button type="button" onClick={nextPage} data-testid="next-button">
        <FaChevronRight color="#fff" size={48} />
      </Button>
    </Container>
  );
}
Paginator.propTypes = {
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};
Paginator.defaultProps = {
  page: 0,
  totalPages: 0,
};
export default Paginator;

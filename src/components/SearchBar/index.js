import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Input, Button } from './styles';

function SearchBar({ small }) {
  const history = useHistory();
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search?q=${input}`);
  }
  return (
    <Container data-testid="search-bar" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Type the name of a movie"
        value={input}
        small={small}
        onChange={e => setInput(e.target.value)}
      />
      <Button type="submit" small={small}>
        <FaSearch color="#fff" size={24} />
      </Button>
    </Container>
  );
}
SearchBar.propTypes = {
  small: PropTypes.bool,
};
SearchBar.defaultProps = {
  small: false,
};
export default SearchBar;

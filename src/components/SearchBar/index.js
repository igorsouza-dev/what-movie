import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Container, Input, Button } from './styles';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(input);
  }
  return (
    <Container data-testid="search-bar" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Type the name of a movie"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button type="submit">
        <FaSearch color="#fff" size={24} />
      </Button>
    </Container>
  );
}

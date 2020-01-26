import React from 'react';
import { startOfWeek, endOfWeek, getYear } from 'date-fns';
import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';
import PostersSection from 'components/PostersSection';

import { Container } from './styles';

export default function Main() {
  function getDateOnly(date) {
    return date.toISOString().substring(0, 10);
  }
  const today = new Date();
  const year = getYear(today);
  const lastYear = year - 1;
  const start = getDateOnly(startOfWeek(today));
  const end = getDateOnly(endOfWeek(today));
  const sections = [
    {
      title: 'Opening this week',
      query: `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}&sort_by=vote_average.desc`,
    },
    {
      title: `Top movies of ${year}`,
      query: `/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=200`,
    },
    {
      title: 'Top movies of last year',
      query: `/discover/movie?primary_release_year=${lastYear}&sort_by=vote_average.desc&vote_count.gte=1000`,
    },
  ];

  return (
    <Container>
      <Logo />
      <SearchBar />
      {sections.map(section => (
        <PostersSection
          key={section.title}
          query={section.query}
          title={section.title}
        />
      ))}
    </Container>
  );
}

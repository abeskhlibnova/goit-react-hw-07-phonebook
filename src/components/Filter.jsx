import React from 'react';
import { getFilter } from 'redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { FilterTitle, FilterInput } from './Phonebook.styled';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
        placeholder="Enter a name to search..."
      ></FilterInput>
    </div>
  );
}

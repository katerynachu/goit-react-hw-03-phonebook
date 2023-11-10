import React from 'react';
import { FilterInput ,FilterTitle} from './Flter.styled';
export const Filter = ({filter,onUpdate,title}) =>{
    return(
      <>
      <FilterTitle>{title}</FilterTitle>
        <FilterInput
          onChange={onUpdate}
          type="text"
          name="filter"
          value={filter}
        />
        </>
    )
}
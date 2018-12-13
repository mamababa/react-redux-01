import React from 'react';
import Link from './link.js';
import {FilterTypes} from '../../constants.js'

import './style.css';

const Filters = () => {
  const x = FilterTypes.ALL;
  return (
    <p className="filters">
      <Link filter={FilterTypes.ALL}>{x}</Link>
      <Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>
      <Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>
    </p>
  );
};

export default Filters;

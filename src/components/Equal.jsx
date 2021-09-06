import React from 'react';
import { useCalc } from '../Context/Context';

const Equal = () => {
  const { solution } = useCalc();

  return (
    <div onClick={solution} className='equal'>
      =
    </div>
  );
};

export default Equal;

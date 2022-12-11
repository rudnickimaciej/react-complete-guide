import React from 'react';

import './AdoptionDate.css';

const AdoptionDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  const yearDiff = (Date.now - props.birthdate).year

  return (
    <div className='adoption-date'>
      <div className='adoption-date__month'>{month}</div>
      <div className='adoption-date__year'>{year}</div>
      <div className='adoption-date__day'>{day}</div>
   
    </div>
  );
};

export default AdoptionDate;

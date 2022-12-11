import React from 'react';

import AdoptionDate from './AdoptionDate';
import Card from '../UI/Card';
import './AdoptionItem.css';

const AdoptionItem = (props) => {

  return (
    <Card className='adoption-item'>
      <AdoptionDate date={props.birthdate} />
      <div className='adoption-item__description'>
        <h2>{props.title}</h2>
        <div className='adoption-item__price'>{props.status}</div>
      </div>
      <button>Change button</button>
    </Card>
  );
}

export default AdoptionItem;

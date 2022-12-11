import React, {useState} from 'react';

import AdoptionDate from './AdoptionDate';
import Card from '../UI/Card';
import './AdoptionItem.css';

const AdoptionItem = (props) => {

  const [name, setName] = useState(props.title);

  const handleClick = ()=> {
    console.log("click")
    setName((prev)=> prev + " 1");
  }
  return (
    <Card className='adoption-item'>
      <AdoptionDate date={props.birthdate} />
      <div className='adoption-item__description'>
        <h2>{name}</h2>
        <div className='adoption-item__price'>{props.status}</div>
      </div>
      <button onClick={(handleClick)}>Change button</button>
    </Card>
  );
}

export default AdoptionItem;

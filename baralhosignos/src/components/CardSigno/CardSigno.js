import React from 'react'
import {CardContainer} from './CardSginoStyled'

const CardSignos = (props) => {
  return (
    <CardContainer>
        <h3>
            {props.signo}
        </h3>

        <img src={props.image} alt={props.signo}/>

        <p>
            {props.startDate} - {props.endDate}
        </p>
    </CardContainer>
  );
}

export default CardSignos;

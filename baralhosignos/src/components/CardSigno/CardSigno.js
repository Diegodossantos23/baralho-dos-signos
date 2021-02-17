import React from 'react'

const CardSignos = (props) => {
  return (
    <div>
        <div>
            {props.signo}
        </div>

        <img src={props.image} alt={props.signo}/>

        <div>
            {props.startDate} - {props.endData}
        </div>
    </div>
  );
}

export default CardSignos;

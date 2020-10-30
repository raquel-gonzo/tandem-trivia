import React from 'react';
import QInput from './QInput';

const QCard = ({data, handleSelect, submitAnswer } ) => { // destructuring props (an object)

    return(
        <div>
            <h2>{data.question}</h2>
            <QInput incorrect={data.incorrect} correct={data.correct} handleSelect={handleSelect} />
        </div>
    );
}

export default QCard;
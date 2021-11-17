import React from 'react';

const WordOrNum = (props) => {
    if (isNaN(props.id)){
        return(
            <p>The word is {props.id}</p>
        )
    } else{
        return(
            <p>The number is {props.id}</p>
        )
    }
}

export default WordOrNum
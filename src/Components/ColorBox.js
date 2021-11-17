import React from 'react';

const ColorBox = (props) => {
    if (isNaN(props.id)){
        return(
            <div style={{
                    backgroundColor:`${props.backgroundColor}`,
                    color:`${props.fontColor}`,
                    height: "40px",
                    width: "200px"
            }}>
                <p>The word is {props.id}</p>
            </div>
        )
    } else{
        return(
            <div
                style={{
                    backgroundColor:`${props.backgroundColor}`,
                    color:`${props.fontColor}`,
                    height: "40px",
                    width: "200px"
                }}
            >
                <p>The number is {props.id}</p>
            </div>
        )
    }
}

export default ColorBox
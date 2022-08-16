import React from 'react';

const Button = ({text, color, handler, styles}) => {
    const _color = 'bg-' + (color ? color : "green-900");

    return (
        <button 
            className={"py-2 px-6 " + _color + " rounded-3xl text-lg text-white " + styles}
            onClick={() => handler()}>
            {text}
        </button>
    );
}

export default Button;

import React from 'react';

const Button = ({ text, click }) => {
    return (
        <button className="cursor-pointer p-1 bg-white bg-opacity-10
                            hover:bg-opacity-30 flex-50 mx-1"
            onClick={() => click(text)}
            title={text}>
            {text}
        </button>
    );
}

export default Button;

import React from 'react';

const ControlButton = ({click, name, selected, title, children}) => {
    
    return (
        <button 
            className={"py-1 px-6 my-5 hover:text-green-700 border-green-800 " + (selected ? 'border-r-3' : '')}
            onClick={() => click(name)}
            title={title}>
            {children}
        </button>
    );
}

export default ControlButton;

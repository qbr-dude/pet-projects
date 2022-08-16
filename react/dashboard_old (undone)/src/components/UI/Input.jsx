import React, {useState} from 'react';

const Input = ({placeholder}) => {
    const [value, setValue] = useState('');

    return (
        <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="bg-blue-200 px-4 rounded-3xl h-10 focus:bg-green-300 focus:outline-green"/>
    );
}

export default Input;

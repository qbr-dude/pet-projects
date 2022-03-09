import React, { useState } from 'react';

const Input = () => {
    const [value, setValue] = useState('');

    return (
        <input type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onBlur={() => setValue('')} placeholder="Enter City"
            className="px-1 w-11/12 h-full bg-black bg-opacity-50 text-2xl text-white" />
    );
}

export default Input;

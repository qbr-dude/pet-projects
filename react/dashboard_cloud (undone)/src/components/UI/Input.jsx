import React, { useState } from 'react';

const Input = ({ placeholder }) => {
    const [value, setValue] = useState('');

    return (
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className="flex-1 p-3 border rounded-md text-cloud-light focus:text-cloud-strong" />
    );
}

export default Input;

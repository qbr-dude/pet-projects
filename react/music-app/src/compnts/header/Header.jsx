import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='d-flex bg-sec justify-content-center shadow py-2'>
            <Link className='header-label h1' to='/'>Music App</Link>
        </header>
    );
}

export default Header;

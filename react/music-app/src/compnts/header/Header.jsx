import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-sec shadow py-2 w-100'>
            <Row className='justify-content-between align-items-center px-4'>
                <Col md='1'><div>Burger</div></Col>
                <Col md='auto'><Link className='header-label h1' to='/'>Music App</Link></Col>
                <Col md='auto'><Button href='/auth/login' className='spotify-login'>Login with Spotify</Button></Col>
            </Row>
        </header>
    );
}

export default Header;

import React from 'react';
import { Nav } from 'react-bootstrap';

const SideNavigation = () => {
    return (
        <Nav
            defaultActiveKey="/home"
            onSelect={(selected) => console.log(selected)}
            className="bg-sec flex-column h-100 align-content-center pt-5">
            <Nav.Item>
                <Nav.Link href=''><span className='nav-link-span h5'>Library</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="downloaded"><span className="nav-link-span h5">Downloaded</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="radio"><span className="nav-link-span h5">Radio</span></Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default SideNavigation;

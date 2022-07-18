import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center align-center'>
            <ul className='pl-10'>
                <Link to='/'>Home</Link>
                <Link to='/create-article'>Create</Link>
                <Link to='home'>Home</Link>
            </ul>
        </div>
    );
};

export default Header;
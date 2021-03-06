import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
	return (
		<Header style={headerStyle}>
			<h1>Todo List </h1>
			<Link style={{ linkStyle }} to="/">
				Home
			</Link>{' '}
			| <Link to="/about">About</Link>
		</Header>
	);
}

const headerStyle = {
	background: '#000',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
};

const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
};

export default Header;

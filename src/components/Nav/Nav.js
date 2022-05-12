import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
	const [activeNav, setActiveNav] = useState(false);
	const [activeNavLinks, setActiveNavLinks] = useState(false);
	const [activeNavBackground, setActiveNavBackground] = useState(false);
	const onClickMenu = () => {
		setActiveNav(!activeNav);
		setActiveNavLinks(!activeNavLinks);
		setActiveNavBackground(!activeNavBackground);
	};
	return (
		<nav>
			<a className='logo' href='/'>
				ai
			</a>
			<div className='hamburger-menu-container'>
				<div
					className={`hamburger-menu ${activeNav ? 'active' : ''}`}
					onClick={onClickMenu}>
					<div className='hamburger-menu-bar-one hamburger-menu-bars'></div>
					<div className='hamburger-menu-bar-two hamburger-menu-bars'></div>
					<div className='hamburger-menu-bar-three hamburger-menu-bars'></div>
				</div>
				<ul className={`nav-list ${activeNavLinks ? 'active-nav-list' : ''}`}>
					<li className='nav-list-item'>
						<a className='nav-link' href='/'>
							about
						</a>
					</li>
					<li className='nav-list-item'>
						<a className='nav-link' href='/'>
							projects
						</a>
					</li>
					<li className='nav-list-item'>
						<a className='nav-link' href='/'>
							contact
						</a>
					</li>
				</ul>
			</div>
			<div
				className={
					activeNavBackground ? 'active-nav-menu-background' : 'nav-menu-background'
				}></div>
		</nav>
	);
};

export default Nav;

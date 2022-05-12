import React from 'react';
import Resume from '../../docs/AnthonyIngleResumeSE.pdf';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<h2>additional info</h2>
			<div>
				<a href='mailto: ingleanthonyco@gmail.com'>email</a>
			</div>
			<div>
				<a
					href='https://www.linkedin.com/in/anthonyingle/'
					target='_blank'
					rel='noreferrer'>
					linkedin
				</a>
			</div>
			<div>
				<a href={Resume} download>
					resume
				</a>
			</div>
			<div>
				<a href='https://github.com/ingl3585' target='_blank' rel='noreferrer'>
					github
				</a>
			</div>
		</footer>
	);
};

export default Footer;

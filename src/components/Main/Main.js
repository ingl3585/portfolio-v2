import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import './main.css';

// CHANGE INTRO DETAILS

const Main = () => {
	return (
		<main>
			<section className='intro-container'>
				<h1 className='intro-headline'>
					hello my name is <span className='text-effect'>tony</span>.
				</h1>
				<p className='intro-details'>
					i like to create cool looking websites. something something something
					something something scroll down a bit or hit the menu bar to see some
					past and current projects and additional info (i.e. email, linkedin,
					resume, and github links).
				</p>
				<AiOutlineCaretDown className='first-intro-down-arrow' size={30} />
			</section>
			<section className='project-list'>
				<div className='project-one project'>
					<h3>sunnyside agency</h3>
					<ul className='project-details'>
						<li>
							<a
								className='project-links'
								href='https://ingl3585.github.io/sunnyside-landing-page/'
								target='_blank'
								rel='noreferrer'>
								live site
							</a>
						</li>
						<li>
							<a
								className='project-links'
								href='https://github.com/ingl3585/sunnyside-landing-page'
								target='_blank'
								rel='noreferrer'>
								code repo
							</a>
						</li>
					</ul>
				</div>
				<div className='project-two project'>
					<h3>weather app</h3>
					<ul className='project-details'>
						<li>
							<a
								className='project-links'
								href='https://ingl3585.github.io/weather-app-v2/'
								target='_blank'
								rel='noreferrer'>
								live site
							</a>
						</li>
						<li>
							<a
								className='project-links'
								href='https://github.com/ingl3585/weather-app-v2'
								target='_blank'
								rel='noreferrer'>
								code repo
							</a>
						</li>
					</ul>
				</div>
				<div className='project-three project'>
					<h3>total weather</h3>
					<ul className='project-details'>
						<li>
							<a
								className='project-links'
								href='https://ingl3585.github.io/total-weather-frontend/'
								target='_blank'
								rel='noreferrer'>
								live site
							</a>
						</li>
						<li>
							<a
								className='project-links'
								href='https://github.com/ingl3585/total-weather-frontend'
								target='_blank'
								rel='noreferrer'>
								code repo
							</a>
						</li>
					</ul>
				</div>
			</section>
			<AiOutlineCaretDown className='second-intro-down-arrow' size={30} />
		</main>
	);
};

export default Main;

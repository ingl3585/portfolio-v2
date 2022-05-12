import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<div className='main-container'>
			<Nav />
			<Main />
			<Footer />
		</div>
	);
};

export default App;

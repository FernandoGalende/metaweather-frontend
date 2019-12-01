import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.scss';

const Home = (props) => {
	return (
		<div className={style.cardContainer}>
			<Link to={'/layoutchalenge'}>layout</Link>
			<Link to={'/jschallenge'}>JavaScript Challenge</Link>
		</div>
	);
};

export default Home;

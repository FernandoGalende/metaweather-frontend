import React from 'react';
import {Link} from 'react-router-dom';
import style from './Home.module.scss';

const Home = () => (
	<div className={style.container}>
		<p className={`${style.line} ${style.typewriter}`}>
			Hi there! This is <strong>Fernando Galende</strong>, please choose one option, and lets start!
		</p>
		<div className={`${style.linkContainer}`}>
			<Link to={'/layoutchalenge'}>Layout Challenge</Link>
			<Link to={'/jschallenge'}>JavaScript Challenge</Link>
		</div>
	</div>
);

export default Home;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WeatherCard from '../../commons/WeatherCard/WeatherCard.component';

import style from './JSChallenge.module.scss';

const JSChallenge = ({ getWeather, cities }) => {
	const [ city, setCity ] = useState('');

	const onClickSearch = (event) => {
		event.preventDefault();
		getWeather(city);
	};

	const handleClose = (onDeleteCity) => console.log(onDeleteCity);

	return (
		<div>
			<div className={style.formContainter}>
				<form onSubmit={onClickSearch}>
					<h5>Search City </h5>
					<div>
						<input onChange={(evt) => setCity(evt.target.value)} />
					</div>
					<button onClick={onClickSearch}>Search</button>
				</form>
			</div>
			<div className={style.resultContainer}>
				{cities &&
					cities.map((element) => (
						<WeatherCard
							key={element.city}
							city={element.city}
							weather={element.weather}
							temperature={element.temperature}
							img={element.img}
							onClose={(onDeleteCity) => handleClose(onDeleteCity)}
						/>
					))}
			</div>
		</div>
	);
};

JSChallenge.defaultProps = {
	cities: [],
	getWeather: () => 0,
};

JSChallenge.propTypes = {
	getWeather: PropTypes.func.isRequired,
	cities: PropTypes.array,
};

export default JSChallenge;

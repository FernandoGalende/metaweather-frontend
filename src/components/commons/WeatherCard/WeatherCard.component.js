import React from 'react';
import PropTypes from 'prop-types';

import style from './WeatherCard.module.scss';

const WeatherCard = ({ city, weather, temperature, img, onClose }) => {
	const handleClose = () => onClose(city);
	return (
		<div className={style.cardContainer}>
			<span>{city}</span>
			<span>{weather}</span>
			<span>{temperature}º</span>
			<img alt={city} src={img} style={{ width: '20px', height: 'auto' }} />
			<button onClick={handleClose}>x</button>
		</div>
	);
};

WeatherCard.defaultProps = {
	city: '',
	img: '',
	onClose: () => 0,
	temperature: 0,
	weather: '',
};

WeatherCard.propTypes = {
	city: PropTypes.string,
	img: PropTypes.string,
	temperature: PropTypes.number,
	weather: PropTypes.string,
	onClose: PropTypes.func,
};

export default WeatherCard;

import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../commons/Dropdown/Dropdown.component';
import WeatherCard from '../../commons/WeatherCard/WeatherCard.component';

import style from './JSChallenge.module.scss';

const JSChallenge = ({getWeather, cities}) => {
	const [city, setCity] = useState();
	const [myCities, setMyCities] = useState([...cities]);

	useEffect(
		() => {
			setMyCities(cities);
		},
		[cities]
	);

	const onClickSearch = (event) => {
		event.preventDefault();
		getWeather(city);
	};

	const oderBy = [{name: '-', value: '-'}, {name: 'up', value: 'up'}, {name: 'down', value: 'down'}];

	const sortTemperture = (order) => {
		const sortedCities = [...cities];
		if (order === 'up') {
			setMyCities(sortedCities.sort((a, b) => a.temperature - b.temperature));
		} else if (order === 'down') {
			setMyCities(sortedCities.sort((a, b) => b.temperature - a.temperature));
		}
	};

	return (
		<div>
			<span>Order temperature by: </span>
			<Dropdown items={oderBy} itemSelected={sortTemperture} selectedNamespace={'-'} />
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
				{myCities &&
					myCities.map((element) => (
						<WeatherCard
							key={element.city}
							city={element.city}
							img={element.img}
							temperature={element.temperature}
							weather={element.weather}
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

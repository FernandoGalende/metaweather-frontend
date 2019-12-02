import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../commons/Dropdown/Dropdown.component';
import WeatherCard from '../../commons/WeatherCard/WeatherCard.component';
import style from './JSChallenge.module.scss';

const JSChallenge = ({getWeather, cities}) => {
	const [city, setCity] = useState();
	const [myCities, setMyCities] = useState([...cities]);
	const [mainInput, setMainInput] = useState('');
	const [average, setAverage] = useState(0);

	useEffect(
		() => {
			if (cities.length > 0) {
				setAverageTemperature(cities);
			}
			setMyCities(cities);
		},
		[average, cities],
	);

	const setAverageTemperature = (cityList) => {
		setAverage(cityList.reduce((total, item) => total + item.temperature, 0) / cityList.length);
	};

	const onClickSearch = (event) => {
		event.preventDefault();
		event.target.value = '';
		mainInput.value = '';
		getWeather(city);
	};

	const sortTemperture = (order) => {
		const sortedCities = [...cities];
		if (order === 'ascending') {
			setMyCities(sortedCities.sort((a, b) => a.temperature - b.temperature));
		} else if (order === 'descending') {
			setMyCities(sortedCities.sort((a, b) => b.temperature - a.temperature));
		}
	};

	return (
		<div>
			<div className={style.containter}>
				<div className={style.searchBlock}>
					<form onSubmit={onClickSearch}>
						<input
							ref={(ref) => setMainInput(ref)}
							placeholder="Add city by name"
							onChange={(evt) => setCity(evt.target.value)}
						/>
						<button onClick={onClickSearch}>Search</button>
					</form>
				</div>
				<div className={style.orderByBlock}>
					<span>Order temp by: </span>
					<Dropdown defaultSelected={'none'} itemSelected={sortTemperture} />
				</div>
				<div className={style.averageByBlock}>
					<span>
						Average temp. <strong>{average}º</strong>
					</span>
				</div>
			</div>
			<div className={style.resultContainer}>
				{myCities
					&& myCities.map((element) => (
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

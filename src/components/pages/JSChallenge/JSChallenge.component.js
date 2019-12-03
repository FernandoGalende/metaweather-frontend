import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import Dropdown from '../../commons/Dropdown/Dropdown.component';
import WeatherCard from '../../commons/WeatherCard/WeatherCard.component';
import style from './JSChallenge.module.scss';

const sortByItems = [{value: 'ascending'}, {value: 'descending'}, {value: 'none'}];

const JSChallenge = ({getWeather, cities, errorMessage, resetErrorMessage}) => {
	const [city, setCity] = useState();
	const [myCities, setMyCities] = useState([...cities]);
	const [mainInput, setMainInput] = useState('');
	const [average, setAverage] = useState(0);
	const [weathers, setWeathers] = useState([{value: 'all'}]);

	useEffect(
		() => {
			const setWeathersList = (cityList) => {
				const weatherList = cityList.reduce((total, item) => [...total, {value: item.weather}], [
					{value: 'all'},
				]);
				setWeathers(makeUniqueList(weatherList));
			};
			if (cities.length > 0) {
				setAverageTemperature(cities);
			}
			setWeathersList(cities);
			setMyCities(cities);
		},
		[average, cities],
	);

	const resetSelects = () => {
		document.getElementsByTagName('select')[0].value = 'none';
		document.getElementsByTagName('select')[1].value = 'all';
	};

	const setAverageTemperature = (cityList) => {
		const degrees = cityList.reduce((total, item) => total + item.temperature, 0) / cityList.length;
		setAverage(Math.round(degrees));
	};

	const makeUniqueList = (list) => {
		const result = [];
		const map = new Map();
		// eslint-disable-next-line no-restricted-syntax
		for (const item of list) {
			if (!map.has(item.value)) {
				map.set(item.value, true);
				result.push({
					value: item.value,
				});
			}
		}
		return result;
	};

	const onClickSearch = (event) => {
		event.preventDefault();
		event.target.value = '';
		mainInput.value = '';
		resetErrorMessage();
		resetSelects();
		getWeather(city);
	};

	const sortTemperture = (order) => {
		const sortedCities = [...myCities];
		if (order === 'ascending') {
			setMyCities(sortedCities.sort((a, b) => a.temperature - b.temperature));
		} else if (order === 'descending') {
			setMyCities(sortedCities.sort((a, b) => b.temperature - a.temperature));
		}
	};

	const filterWeather = (selected) => {
		const filterCities = [...cities];
		if (selected === 'all') {
			setMyCities(filterCities);
		} else {
			setMyCities(filterCities.filter((e) => e.weather === selected));
		}
	};

	return (
		<div>
			<div className={style.containter}>
				<div className={style.searchBlock}>
					<form onSubmit={onClickSearch}>
						<div className={style.searchBarWrap}>
							<input
								ref={(ref) => setMainInput(ref)}
								placeholder="Add city by name"
								onChange={(evt) => setCity(evt.target.value)}
							/>
							{errorMessage !== '' && <span>{errorMessage}</span>}
						</div>
						<button onClick={onClickSearch}>Search</button>
					</form>
				</div>
				<div className={style.orderByBlock}>
					<span>Order temp by: </span>
					<Dropdown defaultSelected={'none'} items={sortByItems} itemSelected={sortTemperture} />
				</div>
				<div className={style.orderByBlock}>
					<span>Select Weather: </span>
					<Dropdown defaultSelected={'all'} items={weathers} itemSelected={filterWeather} />
				</div>
				<div className={style.averageByBlock}>
					<span>
						Average temp. <strong>{average}º</strong>
					</span>
				</div>
			</div>
			<LoadingBar className={style.loadingBar} />
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
	errorMessage: '',
	getWeather: () => 0,
	resetErrorMessage: () => 0,
};

JSChallenge.propTypes = {
	getWeather: PropTypes.func.isRequired,
	cities: PropTypes.array,
	errorMessage: PropTypes.string,
	resetErrorMessage: PropTypes.func,
};

export default JSChallenge;

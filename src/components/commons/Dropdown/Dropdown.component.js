import React from 'react';
import PropTypes from 'prop-types';
import style from './Dropdown.module.scss';

const items = [{value: 'ascending'}, {value: 'descending'}, {value: 'none'}];

const Dropdown = ({defaultSelected, itemSelected}) => (
	<div>
		<select
			className={style.dropdown}
			onChange={(e) => {
				itemSelected(e.target.value);
			}}
		>
			{defaultSelected ? <option>{defaultSelected}</option> : ''}
			{defaultSelected ? (
				items.filter((item) => item.value !== defaultSelected).map((item) => (
					<option key={item.value} value={item.value}>
						{item.value}
					</option>
				))
			) : (
				items.map((item) => (
					<option key={item.value} value={item.value}>
						{item.value}
					</option>
				))
			)}
		</select>
	</div>
);

Dropdown.defaultProps = {
	cidefaultSelectedties: [],
	itemSelected: () => 0,
};

Dropdown.propTypes = {
	defaultSelected: PropTypes.string.isRequired,
	itemSelected: PropTypes.func.isRequired,
};

export default Dropdown;

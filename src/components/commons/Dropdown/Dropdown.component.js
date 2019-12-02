import React from 'react';
import style from './Dropdown.module.scss';

const Dropdown = ({ items = [], itemSelected, defaultSelected }) => (
	<div>
		<select
			className={style.dropdown}
			onChange={(e) => {
				itemSelected(e.target.value);
			}}
		>
			{defaultSelected ? <option>{defaultSelected}</option> : ''}
			{defaultSelected ? (
				items.filter((item) => item.name !== defaultSelected).map((item) => (
					<option key={item.name} value={item.value}>
						{item.name}
					</option>
				))
			) : (
				items.map((item) => (
					<option key={item.name} value={item.value}>
						{item.name}
					</option>
				))
			)}
		</select>
	</div>
);

export default Dropdown;

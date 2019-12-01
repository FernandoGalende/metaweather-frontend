import { connect } from 'react-redux';

import JSChallenge from './JSChallenge.component';
import { getWeather } from '../../../state/Content/actionCreators';
import * as contentSelector from '../../../state/Content/selectors';

const mapStateToProps = (state) => ({
	cities: contentSelector.getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
	getWeather: (city) => dispatch(getWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JSChallenge);

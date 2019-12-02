import {connect} from 'react-redux';

import JSChallenge from './JSChallenge.component';
import {getWeather, resetErrorMessage} from '../../../state/Content/actionCreators';
import * as contentSelector from '../../../state/Content/selectors';

const mapStateToProps = (state) => ({
	cities: contentSelector.getCities(state),
	errorMessage: contentSelector.errorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
	getWeather: (city) => dispatch(getWeather(city)),
	resetErrorMessage: () => dispatch(resetErrorMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JSChallenge);

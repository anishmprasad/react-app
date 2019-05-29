/*eslint-disable */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import 'styles/index.scss';
import App from '../../App';

class Root extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		{
			<Provider store={this.props.store}>
				{
					<BrowserRouter>
						<Switch>
							<Route path='/' component={App} />
						</Switch>
					</BrowserRouter>
				}
			</Provider>;
		}
	}
}

Root.propTypes = {
	store: PropTypes.object
};

// function mapStateToProps(state) {
// 	return {
// 		goal_and_exams: state.atgData.goal_and_exams,
// 		userinfo: state.atgData.userInfo
// 	};
// }
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(
// 		{
// 			verifyUser,
// 			registerCount,
// 			user_details,
// 			fetch_goal_and_exams,
// 			get_ip_details
// 		},
// 		dispatch
// 	);
// }

export default connect(
	null,
	null
)(Root);

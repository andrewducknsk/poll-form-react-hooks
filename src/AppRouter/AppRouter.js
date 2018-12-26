import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// import PropTypes from 'prop-types';
import {PersonalInformation} from '../PersonalInformation/PersonalInformation';
import './app-router.scss';
import {ImportantInformation} from '../ImportantInformation/ImportantInformation';
import {AdditionalInformation} from '../AdditionalInformation/AdditionalInformation';
import {Thanks} from '../Thanks/Thanks';
import {Greeting} from '../Greeting/Greeting';

export function AppRouter() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path='/' component={Greeting} />
				<Route
					exact
					path='/personal-information'
					component={PersonalInformation}
				/>
				<Route
					exact
					path='/important-information'
					component={ImportantInformation}
				/>
				<Route
					exact
					path='/additional-information'
					component={AdditionalInformation}
				/>
				<Route exact path='/thanks' component={Thanks} />
				<Redirect to='/' />
			</Switch>
		</React.Fragment>
	);
}

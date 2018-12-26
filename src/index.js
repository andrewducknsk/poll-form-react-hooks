import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {AppRouter} from './AppRouter/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import './scaffolding.scss';

ReactDOM.render(
	<BrowserRouter>
		<AppRouter />
	</BrowserRouter>,
	document.querySelector('.app')
);

serviceWorker.unregister();

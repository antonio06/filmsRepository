import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route, Router } from 'react-router';
import { FilmListContainer } from './components/main';
import { FilmDetailsContainer } from './components/details/container';
import { HeaderComponent } from './components/header';

export const App: React.StatelessComponent = () => {
	return (
		<HashRouter>
			<div className="container">
				<HeaderComponent />
				<Route exact={true} path="/" component={FilmListContainer} />
				<Route path='/details/:id' component={FilmDetailsContainer} />
			</div>
		</HashRouter>
	)
}
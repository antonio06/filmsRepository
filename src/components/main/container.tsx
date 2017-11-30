import * as React from 'react';
import {FilmListPage} from './page';
import {Film} from './viewModel';

interface State {
	filmList : Film[];
}

export class FilmListContainer extends React.Component<{},State> {
	constructor(props) {
		super(props);
		this.state = {filmList : []};
	}

	render() {
		return (
			<FilmListPage filmList={this.state.filmList}/>
		);
	}
}
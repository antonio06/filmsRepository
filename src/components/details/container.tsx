import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Film } from './viewModel';
import { filmService } from '../../api/filmService';
import { FilmDetailsComponent } from './filmDetailsComponent';
import { mapFilmModelToVm } from './mappers';
import { FilmDetailsPage } from './page';

interface Params {
	id: string;
}

interface State {
	filmDetails: Film;
}

export class FilmDetailsContainer extends React.Component<RouteComponentProps<Params>, State> {
	constructor(props) {
		super(props);
		this.state = { filmDetails: null };
	}

	getFilmDetails = () => {
		filmService.getFilmDetailsById(this.props.match.params.id).then((film) => {
			this.setState({
				filmDetails: mapFilmModelToVm(film),
			})
		})
	}

	render() {
		return (
			<FilmDetailsPage filmDetails={this.state.filmDetails} getFilmDetails={this.getFilmDetails}/>
		);
	}
}
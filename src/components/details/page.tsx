import * as React from 'react';
import { FilmDetailsComponent } from './filmDetailsComponent';
import { Film } from './viewModel'

interface Props {
	filmDetails: Film;
	getFilmDetails: () => void;
}

export class FilmDetailsPage extends React.Component<Props, {}> {
	componentDidMount() {
		this.props.getFilmDetails();
	}

	render() {
		if (this.props.filmDetails) {
			return (
				<FilmDetailsComponent film={this.props.filmDetails} />
			)
		} else {
			return null;
		}
	}
}
import * as React from 'react';
import { FilmListPage } from './page';
import { Film } from './viewModel';
import { filmService } from '../../api/filmService';
import { mapFilmModelToVm } from './mappers';

interface State {
	filmList: Film[];
}

export class FilmListContainer extends React.Component<{}, State> {
	constructor(props) {
		super(props);
		this.state = { filmList: [] };
	}

	fetchFilm = () => {
		filmService.getFilms().then((films) => {
			this.setState({
				filmList: films.map((film) => mapFilmModelToVm(film)),
			});
		});
	};
	render() {
		return (
			<FilmListPage
				filmList={this.state.filmList}
				fetchFilmList={this.fetchFilm}
			/>
		);
	}
}
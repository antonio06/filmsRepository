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
		filmService.getFilms().then((response) => {
			const mappedFilms = response.map((film) => {
				return mapFilmModelToVm(film);
			});
			this.setState({
				filmList: mappedFilms
			});
		});
	};
	render() {
		return (
			<FilmListPage filmList={this.state.filmList}
				fetchFilmList={this.fetchFilm} />
		);
	}
}
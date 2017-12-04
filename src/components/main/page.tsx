import * as React from 'react';
import { Film } from './viewModel';
import { FilmComponent } from './filmComponent'

interface Props {
	filmList: Film[];
	fetchFilmList: () => void;
}

export class FilmListPage extends React.Component<Props, {}> {
	componentDidMount() {
		this.props.fetchFilmList();
	}

	render() {
		return (
			<div className="filmsContainer">
				{
					this.props.filmList.map(
						(film) =>
							<FilmComponent film={film} key={film.id} />
					)
				}
			</div>
		)
	}
}

import * as React from 'react';
import { Film } from './viewModel';

interface Props {
	film: Film;
}

export const FilmComponent: React.StatelessComponent<Props> = (props) => {
	return (
		<div className="film">
			<div className="filmContainer">
				<div className="filmImage">
					<img src={props.film.img} width="300" height="444" />
				</div>
				<span className="title"><p>{props.film.title}</p></span>
				<div className="buttonContainer">
					<button type="button" className="btn btn-primary">More Details</button>
				</div>
			</div>
		</div>
	);
}
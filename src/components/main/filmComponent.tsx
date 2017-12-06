import * as React from 'react';
import { Film } from './viewModel';
import './filmComponent.css';

interface Props {
	film: Film;
}

export const FilmComponent: React.StatelessComponent<Props> = (props) => {
	return (
		<div className="film">
			<div className="film__imageContainer">
				<img className="film__image" src={props.film.img} />
			</div>
			<h2 className="film__title">{props.film.title}</h2>
			<div className="film__buttonContainer">
				<button type="button" className="btn btn-primary" >More Details</button>
			</div>
		</div>
	);
}
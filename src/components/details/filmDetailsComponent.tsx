import * as React from 'react';
import { Film } from './viewModel';
import './filmDetailsComponent.css';
import { Link } from 'react-router-dom';

interface Props {
	film: Film;
}

export const FilmDetailsComponent: React.StatelessComponent<Props> = (props) => {
	return (
		<div className="details">
			<div className="details__imageContainer">
				<img src={props.film.img} />
			</div>
			<div className="details__info">
				<p>Title: {props.film.title}</p>
				<p>Year: {props.film.year}</p>
				<p>Released: {props.film.released}</p>
				<p>Genre: {props.film.genre}</p>
				<p>Director: {props.film.director}</p>
				<p>Plot: {props.film.plot}</p>
				<Link to="/" className="btn btn-primary">Back to list</Link>
			</div>
		</div>
	);
}
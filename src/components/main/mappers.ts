import * as viewModel from "./viewModel";
import * as model from "../../api/model";

export function mapFilmModelToVm(film: model.Film): viewModel.Film {
	return {
		id: film.imdbID,
		title: film.Title,
		img: film.Poster,
		year: parseInt(film.Year),
		released: film.Released,
		genre: film.Genre,
		director: film.Director,
		plot: film.Plot,
	};
}
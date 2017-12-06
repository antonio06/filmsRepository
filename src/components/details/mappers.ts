import * as viewModel from "./viewModel";
import * as model from "../../api/model";

export function mapFilmModelToVm(film: model.Film): viewModel.Film {
	return {
		id: film.id,
		title: film.Title,
		img: film.Poster,
		year: parseInt(film.Year),
		released: film.Released,
		genre: film.Genre,
		director: getDirector(film.Director),
		plot: film.Plot,
	};
}

function getDirector(director: string): string {
	if (director === 'N/A') {
		return 'Unknown';
	} else {
		return director;
	}
}
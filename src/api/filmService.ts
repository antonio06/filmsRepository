import { Film } from "./model";

class FilmService {
	getFilms() {
		return fetch('http://localhost:3000/films').then((response) => {
			return response.json().then((films: Film[]) => {
				return films;
			})
		})
	}

	getFilmDetailsById(id: string) {
		return fetch(`http://localhost:3000/films/${id}`).then((response) => {
			return response.json().then((film: Film) => {
				return film;
			})
		})
	}
}

export const filmService = new FilmService();
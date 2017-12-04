import { Film } from "./model";

class FilmService {
	getFilms() {
		return fetch('http://localhost:3000/films').then((response) => {
			return response.json().then((films : Film[]) => {
				return films;
			})
		})
	}
}

export const filmService = new FilmService();
import * as React from 'react';
import { Film } from './viewModel';

interface Props {
	filmList : Film[];
}

export const FilmListPage = (props : Props) => (
	<h1>Hello from film list page</h1>
);
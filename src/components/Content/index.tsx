import { GenreResponseProps, MovieProps } from "../../common/types";
import { MovieCard } from "../MovieCard";
import { Container } from "./styles";

interface ContentProps {
	movies: MovieProps[];
	selectedGenre: GenreResponseProps;
}

export function Content({movies, selectedGenre}: ContentProps) {
	return (
		<Container>
			<header>
				<span className="category">Categoria:<span> {selectedGenre.title}</span></span>
			</header>
			<main>
				<div className="movies-list">
					{movies.map(movie => (
						<MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
					))}
				</div>
			</main>
		</Container>
	)
}
import { useEffect, useState } from "react";
import { Genre, Movie } from "./common/types";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { api } from "./services/api";
import { GlobalStyles } from "./styles/global";

interface GenreResponse {
	genres: Genre[];
}

interface MovieResponse {
	movies: Movie[]
}


interface SelectedGenreResponse {
	genre: Genre;
}

export function App() {
	const [genres, setGenres] = useState<Genre[]>([])
	const [selectedGenreId, setSelectedGenreId] = useState(1)
	const [movies, setMovies] = useState<Movie[]>([]);
	const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

	useEffect(() => {	
    api.get<GenreResponse>('/genres')
		.then(response => {
			setGenres(response.data.genres)
		})
  }, []);

  useEffect(() => {
    api.get<MovieResponse>(`/movies/?Genre_id=${selectedGenreId}`)
		.then(response => {
      setMovies(response.data.movies);
    });
		
    api.get<SelectedGenreResponse>(`/genres/${selectedGenreId}`)
		.then(response => {
      setSelectedGenre(response.data.genre);
    })
  }, [selectedGenreId]);

	function handleButtonClick(id: number) {
    setSelectedGenreId(id);
  }
	
	return (
    <>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<SideBar genres={genres} selectedGenreId={selectedGenreId} onButtonClick={handleButtonClick} />
				<Content movies={movies} selectedGenre={selectedGenre} />
			</div>
			<GlobalStyles />
    </>
  );
}


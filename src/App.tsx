import { useEffect, useState } from "react";
import { GenreResponseProps, MovieProps } from "./common/types";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { api } from "./services/api";
import { GlobalStyles } from "./styles/global";

export function App() {
	const [genres, setGenres] = useState<GenreResponseProps[]>([])
	const [selectedGenreId, setSelectedGenreId] = useState(1)
	const [movies, setMovies] = useState<MovieProps[]>([]);
	const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

	useEffect(() => {	
    api.get<GenreResponseProps[], any>('genres')
		.then(response => {
			setGenres(response.data.genres)
		})
  }, []);

  useEffect(() => {
    api.get<MovieProps[], any>(`movies/:Genre_id=${selectedGenreId}`)
		.then(response => {
      setMovies(response.data.movies);
    });
		
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`)
		.then(response => {
      setSelectedGenre(response.data);
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


import { useEffect, useState } from "react";
import { GenreResponseProps } from "./common/types";
import { SideBar } from "./components/SideBar";
import { api } from "./services/api";
import { GlobalStyles } from "./styles/global";

export function App() {
	const [genres, setGenres] = useState<GenreResponseProps[]>([]);
	const [selectedGenreId, setSelectedGenreId] = useState(1);
	
	// Erro: Property genres does not exist on type GenreResponseProps[]
	// useEffect(() => {	
  //   api.get<GenreResponseProps[]>('genres')
	// 	.then(response => {
	// 		setGenres(response.data.genres)
	// 	})
  // }, []);
	
	useEffect(() => {
		setGenres([
			{
				id: 1,
				name: "action",
				title: "Ação"
			},
			{
				id: 2,
				name: "comedy",
				title: "Comédia"
			},
			{
				id: 3,
				name: "documentary",
				title: "Documentário"
			},
			{
				id: 4,
				name: "drama",
				title: "Drama"
			},
			{
				id: 5,
				name: "horror",
				title: "Terror"
			},
			{
				id: 6,
				name: "family",
				title: "Família"
			}
		])	
	}, []);

	function handleButtonClick(id: number) {
    setSelectedGenreId(id);
  }
	
	return (
    <>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<SideBar genres={genres} selectedGenreId={selectedGenreId} onButtonClick={handleButtonClick}  />
			</div>
			<GlobalStyles />
    </>
  );
}
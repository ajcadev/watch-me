import { useEffect, useState } from "react";
import { GenreResponseProps } from "./common/types";
import { SideBar } from "./components/SideBar";
import { api } from "./services/api";
import { GlobalStyles } from "./styles/global";

export function App() {
	const [genres, setGenres] = useState<GenreResponseProps[]>([])
	const [selectedGenreId, setSelectedGenreId] = useState(1)
	
	useEffect(() => {	
    api.get<GenreResponseProps[], any>('genres')
		.then(response => {
			setGenres(response.data.genres)
		})
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


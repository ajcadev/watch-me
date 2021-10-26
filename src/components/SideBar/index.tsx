import { Genre } from "../../common/types";
import { Button } from "../Button";
import { Container } from "./styles";

interface SideBarProps {
	genres: Genre[];
	selectedGenreId: number;
	onButtonClick: (id:number) => void;
}

export function SideBar({genres, selectedGenreId, onButtonClick}: SideBarProps) {
	return(
		<Container>
			<span>Watch<p>Me</p></span>
			<div className="buttons-container">
				{genres.map(genre => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => onButtonClick(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</Container>
	)
}
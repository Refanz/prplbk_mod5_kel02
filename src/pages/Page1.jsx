import { useContext } from "react";
import { PokemonContext } from "../api/PokemonContext.jsx";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { CatchingPokemonRounded } from "@mui/icons-material";

export default function Page1() {
  const { pokemon, setPokemon } = useContext(PokemonContext);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {pokemon.slice(0, 9).map((data, index) => {
        return (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <CatchingPokemonRounded color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={data.name.toLocaleUpperCase()}
              secondary="Pokemon"
            />
          </ListItem>
        );
      })}
    </List>
  );
}

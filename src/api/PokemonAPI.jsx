import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/"

export default async function getPokemons() {
    const pokemon = await axios.get(BASE_URL + "pokemon")
    return pokemon.data
}

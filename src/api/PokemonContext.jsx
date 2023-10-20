import {createContext, useEffect, useState} from "react";
import getPokemons from "./PokemonAPI.jsx";

const PokemonContext = createContext(null);

const PokemonContextProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        if (pokemon.length === 0 ) {
            getPokemons()
                .then(res => {
                    setPokemon(res.results)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
    }, [pokemon])

    return (
        <PokemonContext.Provider value={{ pokemon, setPokemon }}>
            {children}
        </PokemonContext.Provider>
    )
}

export {PokemonContext}

export default PokemonContextProvider
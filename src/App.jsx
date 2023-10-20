import './App.css'
import Layout from "./pages/Layout.jsx";
import PokemonContextProvider from "./api/PokemonContext.jsx";

function App() {

    return (
        <PokemonContextProvider>
            <Layout/>
        </PokemonContextProvider>
    )
}

export default App

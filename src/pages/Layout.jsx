import {AppBar, Box, Link, Toolbar} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import PokemonContextProvider from "../api/PokemonContext.jsx";

export default function Layout() {
    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <Link href={"/page1"} variant="h6" underline="none" fontWeight="bold"
                              sx={{flexGrow: 1, color: "#fff", textAlign: "center"}}>Pokemon Page 1</Link>
                        <Link href={"/page2"} variant="h6" underline="none" fontWeight="bold"
                              sx={{flexGrow: 1, color: "#fff", textAlign: "center"}}>Pokemon Page 2</Link>
                    </Toolbar>
                </AppBar>

                <Box component="main" sx={{p: 1}}>
                    <BrowserRouter>

                        <Routes>

                            <Route path="/">
                                <Route index element={<Page1 />} />
                                <Route path="page1" element={<Page1 />}/>
                                <Route path="page2" element={<Page2 />}/>
                            </Route>

                        </Routes>

                    </BrowserRouter>
                </Box>
            </Box>
        </>
    )
}

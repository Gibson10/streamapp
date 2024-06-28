import Platform from "@components/Platform";
import SearchBar from "@components/SearchBar";
import SideBar from "@components/SideBar";
import { getMovies } from "../utils";

const App = async () => {

    const movies = await getMovies()

    return <div className='w-full bg-black'>
        <SideBar />
        <Platform movies={movies} />
    </div>
};

export default App;

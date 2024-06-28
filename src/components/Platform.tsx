import { Movie } from "@/app/utils"
import Image from "next/image"
import { FC } from "react"
import Movies from "./Movies"
import SearchBar from "./SearchBar"

type PlatformProps = {
    movies: Movie[]
}

const Platform: FC<PlatformProps> = ({ movies }) => {
    return <div className="text-white w-screen pl-4 md:pl-40 mt-32 md:mt-6 flex flex-col items-center gap-8">
        <SearchBar />
        <Movies list={movies} title="Continue Watching" progressBar={true} />
        <Movies list={movies.slice().reverse()} title="Popular Movies" />
    </div>
}

export default Platform
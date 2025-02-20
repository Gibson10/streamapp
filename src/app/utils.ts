import axios from 'axios';
import { cache } from 'react'

export type Movie = {
    id: number
    backdrop_path: string
    title: string
    original_title: string
    original_name: string
    poster_path: string
}

export const getMovies: () => Promise<Movie[]> = cache(async () => {
    try {
        const res = await axios.get<{ results: Movie[] }>(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&with_genres=878`)
        return res.data.results
    } catch (error) {
        return []
    }
})
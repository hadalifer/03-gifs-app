import React, { useState } from 'react'
import type { Gif } from './gifs/interfaces/gif.interfaces';
import CustomHeader from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { CustomPreviousSerches } from './gifs/components/CustomPreviousSerches'
import CustomGifList from './gifs/components/CustomGifList'
import { getGifsByQuery } from './gifs/actions/get-gif-by-query'



export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifsResoult, setGifsResoult] = useState<Gif[]>([]);
    const getGifResoult = async (query: string) => {
        const gifs = await getGifsByQuery(query);
        setGifsResoult(gifs)
    }
    const handleTermClicked = (term: string) => {
        getGifResoult(term);

    }
    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return
        if (!previousTerms.includes(query)) {
            setPreviousTerms([query, ...previousTerms].slice(0, 5));
        }
        getGifResoult(query);
    }
    return (
        <>
            <CustomHeader title='Buscador de Gifs' description='encuentra el mejor gif para compartir' />
            <CustomSearchBar onQuery={handleSearch} ></CustomSearchBar>
            <CustomPreviousSerches list={previousTerms} onClick={handleTermClicked} ></CustomPreviousSerches>
            <CustomGifList gifs={gifsResoult}></CustomGifList>
        </>
    )
}

export default GifsApp

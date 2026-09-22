import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { CustomPreviousSerches } from './gifs/components/CustomPreviousSerches'
import CustomGifList from './gifs/components/CustomGifList'



export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['la bella']);
    const handleTermClicked = (term: string) => {
        console.log({ term });
    }
    const handleSearch = (query: string) => {
        console.log({ query })
    }
    return (
        <>
            <CustomHeader title='Buscador de Gifs' description='encuentra el mejor gif para compartir' />
            <CustomSearchBar onQuery={handleSearch} ></CustomSearchBar>
            <CustomPreviousSerches list={previousTerms} onClick={handleTermClicked} ></CustomPreviousSerches>
            <CustomGifList gifs={mockGifs}></CustomGifList>
        </>
    )
}

export default GifsApp

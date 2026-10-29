
import CustomHeader from './shared/components/CustomHeader'
import { CustomSearchBar } from './shared/components/CustomSearchBar'
import { CustomPreviousSerches } from './gifs/components/CustomPreviousSerches'
import CustomGifList from './gifs/components/CustomGifList'
import useGifs from './gifs/hooks/useGifs';



export const GifsApp = () => {
    const { gifsResoult, handleSearch, handleTermClicked, previousTerms } = useGifs();
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

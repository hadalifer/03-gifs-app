
import { useRef, useState } from 'react'
import type { Gif } from '../interfaces/gif.interfaces';
import { getGifsByQuery } from '../actions/get-gif-by-query';

// const gifCache: Record<string, Gif[]> = {};
const useGifs = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifsResoult, setGifsResoult] = useState<Gif[]>([]);
    const gifCache = useRef<Record<string, Gif[]>>({});
    const getGifResoult = async (query: string) => {
        if (gifCache.current[query]) {
            setGifsResoult(gifCache.current[query]);
            return;
        }
        const gifs = await getGifsByQuery(query);
        setGifsResoult(gifs)
        gifCache.current[query] = gifs;
        console.log(gifCache);
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
    return {
        //values
        previousTerms,
        gifsResoult,
        //methods/actions
        handleTermClicked,
        handleSearch,
    }

}
export default useGifs
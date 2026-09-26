
import type { GiphyResponse } from "../interfaces/giphy.responce";
import type { Gif } from "../interfaces/gif.interfaces";
import { giphyApi } from "../api/giphy.api";
export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 20,
        }
    })
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
};
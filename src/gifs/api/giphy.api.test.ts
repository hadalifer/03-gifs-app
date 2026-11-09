import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphyApi', () => {
    test('should be configurate correctly', () => {
        const baseURL = giphyApi.defaults.baseURL;
        const params = giphyApi.defaults.params;
        expect(baseURL).toBe('https://api.giphy.com/v1/gifs');
        expect(params).toStrictEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
        })
    })
})
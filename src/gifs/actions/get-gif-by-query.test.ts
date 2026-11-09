import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gif-by-query";

describe('getGifsByQuery', () => {
    test('should return a list of complete gifs', async () => {
        const gifs = await getGifsByQuery('hola');
        const [gif1] = gifs;
        // console.log(gifs);
        //console.log(gif1);
        expect(gif1).toStrictEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
            width: expect.any(Number),
            height: expect.any(Number),

        })
        expect(gifs.length).toBe(20);


    })
})
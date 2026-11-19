import { afterEach, beforeEach, describe, expect, test } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';
import { getGifsByQuery } from "./get-gif-by-query";
import { giphyApi } from "../api/giphy.api";
import { giphyResponseMock } from "../../mock-data/giphyResponse.mock";

describe('getGifsByQuery', () => {
    let mock = new AxiosMockAdapter(giphyApi);
    beforeEach(() => {
        mock = new AxiosMockAdapter(giphyApi);
    })

    // test('should return a list of complete gifs', async () => {
    //     const gifs = await getGifsByQuery('hola');
    //     const [gif1] = gifs;
    //     // console.log(gifs);
    //     //console.log(gif1);
    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number),

    //     })
    //     expect(gifs.length).toBe(20);


    // })
    test('should return a list of gifs', async () => {
        mock.onGet('/search').reply(200, giphyResponseMock);
        const gifs = await getGifsByQuery('harry potter')
        // console.log(gifs)// es lo que le pedimos al api
        expect(gifs.length).toBe(10);
        gifs.forEach(gifs => {
            expect(typeof gifs.height).toBe('number')
            expect(typeof gifs.width).toBe('number')
            expect(typeof gifs.title).toBe('string')
            expect(typeof gifs.id).toBe('string')
            expect(typeof gifs.url).toBe('string')
        })

    })
    test('should return an empty list when send a empty query', async () => {
        const gifs = await getGifsByQuery('');
        expect(gifs.length).toBe(0);
    })
    test('should send an error when API returns an error', async () => {

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request',
            },
        });
        const gifs = await getGifsByQuery('1');
        console.log(gifs);
    })
})
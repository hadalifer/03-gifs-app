import { describe, expect, test, vi } from "vitest";
import { useGifs } from './useGifs'
import { renderHook } from "@testing-library/react";
import { act } from "react";
import * as gifsActions from "../actions/get-gif-by-query";

describe('useGifs', () => {

    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());
        //console.log(result);
        expect(result.current.previousTerms.length).toBe(0)
        expect(result.current.gifsResoult.length).toBe(0)
        expect(result.current.handleTermClicked).toBeDefined();
        expect(result.current.handleSearch).toBeDefined();

    })
    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleSearch('hola')
        })
        expect(result.current.gifsResoult.length).toBe(20)

    });
    test('should return a list of gifs when handleTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs());
        const term = 'la rosa';
        await act(async () => {
            await result.current.handleTermClicked(term);
        });
        expect(result.current.gifsResoult.length).toBe(20);
    });
    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());
        const term = 'la rosa';
        await act(async () => {
            await result.current.handleTermClicked(term);
        });

        vi.spyOn(gifsActions, 'getGifsByQuery').mockRejectedValue(new Error('this is an error'))
        await act(async () => {
            await result.current.handleTermClicked(term);
        });
        // como se mando a extraer los objetos del cache, no genero el error porque no volvimos a obtener nuevos gifs
    })
    test('should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());
        vi.spyOn(gifsActions, 'getGifsByQuery').mockResolvedValue([]);
        const terms = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
        for (const term of terms) {
            await act(async () => {
                await result.current.handleSearch(term);
                // console.log(result.current.previousTerms);
            })
        }
        expect(result.current.previousTerms.length).toBe(5);
        expect(result.current.previousTerms).toStrictEqual(terms.slice(-5).reverse());



    })
});



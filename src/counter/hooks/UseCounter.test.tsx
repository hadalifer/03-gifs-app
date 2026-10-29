import { describe, expect, test } from 'vitest'
import { act, render, renderHook, screen } from '@testing-library/react'
import { useCounter } from './UseCounter'

describe('useCounter', () => {
    test('should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
    })
    test('should initialize with value of 30', () => {
        const { result } = renderHook(() => useCounter(30));
        console.log(result.current.counter)
        expect(result.current.counter).toBe(30);
    })
    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => { result.current.handleAdd() });
        console.log(result.current.counter)
        expect(result.current.counter).toBe(11);

    })
    test('should decrement counter when handleSubtract is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => { result.current.handleSubtract() });
        console.log(result.current.counter)
        expect(result.current.counter).toBe(9);

    })
    test('should reset counter when handlereset is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => { result.current.handleAdd() });
        act(() => { result.current.handleAdd() });
        console.log(result.current.counter)
        expect(result.current.counter).toBe(12);
        act(() => { result.current.handleReset() });
        console.log(result.current.counter)
        expect(result.current.counter).toBe(10);

    })
})
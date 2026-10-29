import { describe, expect, test, } from "vitest";
import { MyCounterApp } from './MyCounterApp'
import { fireEvent, render, screen } from "@testing-library/react";


describe('MyCounterApp', () => {
    test('should render correctly the component', () => {
        render(<MyCounterApp />);
        // screen.debug();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter = 10');
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined
        expect(screen.getByRole('button', { name: 'reset' })).toBeDefined

    })
    test('should increse the header when active the +1 button', () => {
        render(<MyCounterApp />);
        fireEvent.click(screen.getByRole('button', { name: '+1' }))
        //screen.debug();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter = 11');
    })
    test('should decrese the header when active the -1 button', () => {
        render(<MyCounterApp />);
        fireEvent.click(screen.getByRole('button', { name: '-1' }))
        //screen.debug();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter = 9');
    })
    test('should reset the header when active the reset button after change the value', () => {
        render(<MyCounterApp />);
        fireEvent.click(screen.getByRole('button', { name: '-1' }))
        fireEvent.click(screen.getByRole('button', { name: '-1' }))
        //screen.debug();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter = 8');
        fireEvent.click(screen.getByRole('button', { name: 'reset' }))
        //  screen.debug()
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('counter = 10');
    })
})


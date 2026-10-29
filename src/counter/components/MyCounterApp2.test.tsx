import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
//import { useCounter } from "../hooks/UseCounter";
const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();
vi.mock('../hooks/UseCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock,
    })
}));

describe('MyCounterApp2', () => {
    test('should render the component', () => {
        render(<MyCounterApp />);
        screen.debug();
    });
    test('shgould call handleAdd if button is clicked', () => {
        render(<MyCounterApp />);
        const button = screen.getByRole('button', { name: '+1' });
        fireEvent.click(button);
        expect(handleAddMock).toHaveBeenCalled;
        expect(handleSubtractMock).not.toHaveBeenCalled;
        expect(handleResetMock).not.toHaveBeenCalled;

    })
})
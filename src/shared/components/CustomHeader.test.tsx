import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CustomHeader } from './CustomHeader'

describe('CustomHeader', () => {
    const title = 'test title';
    const description = 'test description';
    test('should render the title correctly', () => {
        render(<CustomHeader title={title} />)
        // screen.debug();
        expect(screen.getByText(title)).toBeDefined;
        expect(screen.getByText(title)).not.toBeNull;
    });
    test('should render the description when is provided', () => {
        render(<CustomHeader title={title} description={description} />)
        screen.debug();
        expect(screen.getByText(description)).toBeDefined;
        expect(screen.getByText(description)).not.toBeNull;
    });
    test('should not render the description when is not provided', () => {
        const { container } = render(<CustomHeader title={title} />)
        const divElement = container.querySelector('.content-center');
        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
        screen.debug();



    });
})
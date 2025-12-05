/**
 * Unit tests for ABBadge component
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ABBadge from '../ABBadge';

describe('ABBadge', () => {
    // Test for valid rendering
    describe('Rendering', () => {
        it('should render without crashing', () => {
            render(<ABBadge />);
            expect(screen.getByText('All Brands')).toBeInTheDocument();
        });

        it('should render with correct text content', () => {
            render(<ABBadge />);
            const badge = screen.getByText('All Brands');
            expect(badge).toHaveTextContent('All Brands');
        });

        it('should render as a paragraph element', () => {
            render(<ABBadge />);
            const badge = screen.getByText('All Brands');
            expect(badge.tagName).toBe('P');
        });
    });

    // Test for CSS classes
    describe('Styling', () => {
        it('should have the brand-badge class', () => {
            render(<ABBadge />);
            const badge = screen.getByText('All Brands');
            expect(badge).toHaveClass('brand-badge');
        });

        it('should have the bg-gray-300 class for background', () => {
            render(<ABBadge />);
            const badge = screen.getByText('All Brands');
            expect(badge).toHaveClass('bg-gray-300');
        });

        it('should have the text-black class for text color', () => {
            render(<ABBadge />);
            const badge = screen.getByText('All Brands');
            expect(badge).toHaveClass('text-black');
        });

        it('should have all expected CSS classes', () => {
            render(<ABBadge />);
            const badge = screen.getByText('All Brands');
            expect(badge).toHaveClass('brand-badge', 'bg-gray-300', 'text-black');
        });
    });

    // Test for multiple renders (edge case)
    describe('Multiple Renders', () => {
        it('should render multiple instances correctly', () => {
            render(
                <>
                    <ABBadge />
                    <ABBadge />
                </>
            );
            const badges = screen.getAllByText('All Brands');
            expect(badges).toHaveLength(2);
        });
    });

    // Snapshot test
    describe('Snapshot', () => {
        it('should match snapshot', () => {
            const { container } = render(<ABBadge />);
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});


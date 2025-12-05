/**
 * Unit tests for BTBadge component
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import BTBadge from '../BTBadge';

describe('BTBadge', () => {
    // Test for valid rendering
    describe('Rendering', () => {
        it('should render without crashing', () => {
            render(<BTBadge />);
            expect(screen.getByText('Bound Tree')).toBeInTheDocument();
        });

        it('should render with correct text content', () => {
            render(<BTBadge />);
            const badge = screen.getByText('Bound Tree');
            expect(badge).toHaveTextContent('Bound Tree');
        });

        it('should render as a paragraph element', () => {
            render(<BTBadge />);
            const badge = screen.getByText('Bound Tree');
            expect(badge.tagName).toBe('P');
        });
    });

    // Test for CSS classes
    describe('Styling', () => {
        it('should have the brand-badge class', () => {
            render(<BTBadge />);
            const badge = screen.getByText('Bound Tree');
            expect(badge).toHaveClass('brand-badge');
        });

        it('should have the bg-yellow-400 class for background', () => {
            render(<BTBadge />);
            const badge = screen.getByText('Bound Tree');
            expect(badge).toHaveClass('bg-yellow-400');
        });

        it('should have the text-black class for text color', () => {
            render(<BTBadge />);
            const badge = screen.getByText('Bound Tree');
            expect(badge).toHaveClass('text-black');
        });

        it('should have all expected CSS classes', () => {
            render(<BTBadge />);
            const badge = screen.getByText('Bound Tree');
            expect(badge).toHaveClass('brand-badge', 'bg-yellow-400', 'text-black');
        });
    });

    // Test for multiple renders (edge case)
    describe('Multiple Renders', () => {
        it('should render multiple instances correctly', () => {
            render(
                <>
                    <BTBadge />
                    <BTBadge />
                </>
            );
            const badges = screen.getAllByText('Bound Tree');
            expect(badges).toHaveLength(2);
        });
    });

    // Snapshot test
    describe('Snapshot', () => {
        it('should match snapshot', () => {
            const { container } = render(<BTBadge />);
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});


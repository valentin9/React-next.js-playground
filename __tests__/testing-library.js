import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

test('renders deploy link', () => {
    const { getByText } = render(<Index />);
    const linkElement = getByText(
        /You can upload files here for everyone to see\!/
    );
    expect(linkElement).toBeInTheDocument();
});

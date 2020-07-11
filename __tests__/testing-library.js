import React from 'react';
import { render } from '@testing-library/react';
import Files from '../pages/files';

test('renders deploy link', () => {
    const { getByText } = render(<Files />);
    const linkElement = getByText(/File uploader/);
    expect(linkElement).toBeInTheDocument();
});

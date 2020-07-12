import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import File from '../app/components/File';

test('renders file size', () => {
    const wrapper = render(
        <File name="testname" src="image.jpg" size={102400} />
    );
    const sizeLabel = wrapper.getByText(/100 KB/);

    expect(sizeLabel).toBeInTheDocument();
});

test('renders file name', () => {
    const wrapper = render(
        <File name="testname" src="image.jpg" size={102400} />
    );
    const fileName = wrapper.getByText(/testname/);

    expect(fileName).toBeInTheDocument();
});

test('triggers delete callback', () => {
    let called = null;
    const wrapper = render(
        <File
            name="testname"
            src="image.jpg"
            onDelete={() => (called = true)}
            size={100000}
        />
    );

    fireEvent(
        wrapper.getByText('delete'),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    );

    expect(called).toBe(true);
});

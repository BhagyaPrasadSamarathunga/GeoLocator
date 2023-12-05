import React from "react";

import { render, screen } from '@testing-library/react'
import LoadingSpinner from '../../src/components/LoadingSpinner'

describe ('LoadingSpinner', () => {
    it("Spinner renders successfully",()=> {
    render(<LoadingSpinner/>);
    const search = screen.getByTestId('spinner');
    expect(search).toBeInTheDocument();
});
})
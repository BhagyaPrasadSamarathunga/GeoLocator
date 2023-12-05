import React from "react";

import { render, screen } from '@testing-library/react';
import GeoMap from '../../src/components/GeoMap';

describe ('Geo Map', () => {
    it("Geo map renders successfully",()=> {
    render(<GeoMap/>);
    const search = screen.getByTestId('map-container');
    expect(search).toBeInTheDocument();
});
})
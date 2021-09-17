import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor, wait} from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from '../services/fetchColorService';
import userEvent from '@testing-library/user-event';

// jest.mock('../services/fetchColorService')

// const testColor = {
//     color: 'aliceblue',
//     code: { hex: '#f0f8ff'},
//     id: 1
//}

test("Renders without errors", ()=> {
    // render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    // fetchColorService.mockResolvedValueOnce(testColor)
    // render(<BubblePage />)
    // const colors = screen.getAllByTestId('color')
    // await waitFor(() => {
    //     expects(colors).toHaveLength(1);
    // })
});


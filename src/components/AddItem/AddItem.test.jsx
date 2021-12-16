import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingList from '../ShoppingList/ShoppingList';

it('should render a new item to the page', async () => {
    render(<ShoppingList />)

    waitFor(async() => {
    const input = await screen.findByPlaceholderText('Add Item...')
    const button = await screen.findByRole('button', {name: 'add-button'});

    userEvent.type(input, 'potatoes');
    userEvent.click(button);
    })
    const text = await screen.findByText('potatoes');
    expect(text).toBeInTheDocument()
})
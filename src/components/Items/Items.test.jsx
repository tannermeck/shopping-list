import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingList from '../ShoppingList/ShoppingList';

it('should render a list of items', () => {
    render(<ShoppingList />)
    const pickles = screen.getByText('Pickles');
    const mac = screen.getByText('Mac & Cheese');
    const toquitos = screen.getByText('Toquitos');

    expect(pickles).toBeInTheDocument();
    expect(mac).toBeInTheDocument();
    expect(toquitos).toBeInTheDocument();
})

// it('should edit an item that exists on the page', async () => {
//     render(<ShoppingList />)

//     waitFor(async() => {
//     const button = await screen.findByRole('button', {name: 'Pickles-aria'});
//     const input = await screen.findByRole({name: 'input-box'})
    
//     userEvent.click(button);
//     userEvent.type(input, 'pickled olives');
//     const saveButton = await screen.findByRole('button', {name: 'save-button'})
//     userEvent.click(saveButton);
//     screen.debug()
//     })
    
//     const text = await screen.findByText('pickled olives');
//     expect(text).toBeInTheDocument()
// })

it('should delete an item that exists on the page', async () => {
    render(<ShoppingList />)
    const pickles = await screen.findByText('Pickles')
    const button = await screen.findAllByRole('button', {name: 'delete-button'})
    button.map(btn => {
        userEvent.click(btn)
    })
    expect(pickles).not.toBeInTheDocument();

})
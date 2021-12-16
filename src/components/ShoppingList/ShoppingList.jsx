import { useReducer, useState } from 'react';
import Items from '../Items/Items';
import style from './shoppingList.css'

let initialItems = [
    { id: 0,
      name: 'Pickles',
      done: false
    },
    { id: 1,
      name: 'Mac & Cheese',
      done: false
    },
    { id: 2,
      name: 'Toquitos',
      done: false
    }
]

function itemsReducer(items, action){
    switch(action.type){
        case 'add' : {
            return [...items, {id: action.id, name: action.name, done: false}]
        }
        default: {
            throw Error('Action Not Found')
        }
    }
}

function ShoppingList(){
    const [name, setName] = useState('')
    const [items, dispatch] = useReducer(itemsReducer, initialItems)

    const addNewItem = (name) => {
        dispatch({
            type: 'add',
            id: items.length,
            name
        })
    }
    const handleNewItem = (e) => {
        e.preventDefault();
        addNewItem(name)
        setName('')
    }

    return (
        <section className={style.shoppingContainer}>
            <div className={style.inputField}>
                <h1 className={style.header}>Add to Your Shopping List:</h1>
                <form className={style.form} onSubmit={handleNewItem}>
                    <input className={style.inputBox} 
                    type='text' 
                    placeholder='Add Item...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <button className={style.submitButton}>Add New Item</button>
                </form>
            </div>
            <div>
                <Items list={items}/>
            </div>
        </section>
    )
}
export default ShoppingList;
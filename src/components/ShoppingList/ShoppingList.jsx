import { useReducer } from 'react';
import AddItem from '../AddItem/AddItem';
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
    
    const [items, dispatch] = useReducer(itemsReducer, initialItems)

    const addNewItem = (name) => {
        dispatch({
            type: 'add',
            id: items.length,
            name
        })
    }

    return (
        <section className={style.shoppingContainer}>
            <div className={style.inputField}>
                <AddItem addNewItem={addNewItem} />
            </div>
            <div>
                <Items list={items}/>
            </div>
        </section>
    )
}
export default ShoppingList;
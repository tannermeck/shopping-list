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
let allItems = [...initialItems]
function itemsReducer(items, action){
    switch(action.type){
        case 'add' : {
            const newObj = {id: action.id, name: action.name, done: false}
            allItems.push(newObj)
            return [...items, newObj]
        }
        case 'edit' : {
           return items.map(item => {
               if (item.id === action.name.id){
                   return action.name
               }
               return item
           })
        }
        case 'delete' : {
            return items.filter(item => item.id !== action.id)
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
            id: allItems.length,
            name
        })
    }
    const editItem = (name) => {
        dispatch({
            type: 'edit',
            name
        })
    }
    const deleteItem = (id) => {
        dispatch({
            type: 'delete',
            id
        })
    }

    return (
        <section className={style.shoppingContainer}>
            <div className={style.inputField}>
                <AddItem addNewItem={addNewItem} />
            </div>
            <div>
                <Items list={items} deleteItem={deleteItem} editItem={editItem}/>
            </div>
        </section>
    )
}
export default ShoppingList;
import { useState } from 'react';
import style from '../ShoppingList/shoppingList.css';

function AddItem({ addNewItem }){

    const [name, setName] = useState('')

    const handleNewItem = (e) => {
        e.preventDefault();
        addNewItem(name)
        setName('')
    }
    return (
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
    )
}
export default AddItem;
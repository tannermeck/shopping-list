import { useState } from 'react';
import style from './items.css';

function Items({ list, deleteItem, editItem }){

    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState('');

    const handleEdit = (id) => {
        setEditId(id)
        setEdit(true);
    }
    const handleSave = () => {
        setEdit(false)
        setEditId('')
    }
    const handleDelete = (id) => {
        deleteItem(id)
    }
    return (
        <div className={style.itemContainer}>
            <h1 className={style.groceryHeader}>Grocery Items:</h1>
            {list.map(food => (
            <ul key={food.id}>
                {(editId !== food.id) &&
                    <div key={food.id} className={style.editList}>
                        <li className={style.listItem}>{food.name}</li>
                        <button className={style.editButton} onClick={() => handleEdit(food.id)}>Edit</button>
                        <button className={style.deleteButton} onClick={() => handleDelete(food.id)}>Delete</button>
                    </div>}
                {(editId === food.id) && edit &&
                    <div>
                        <input className={style.editInput} 
                            type='text'
                            value={food.name}
                            onChange={(e) => {editItem({ ...food, name: e.target.value })}}
                        />
                        <button className={style.saveButton} onClick={() => handleSave()}>Save</button>
                        <button className={style.deleteButton} onClick={() => handleDelete(food.id)}>Delete</button>
                    </div>}
            </ul>
            ))} 
        </div>
    )
}
export default Items;
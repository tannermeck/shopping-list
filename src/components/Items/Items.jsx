import { useState } from 'react';
import style from './items.css';

function Items({ list, deleteItem, editItem }){

    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState('');
    // const [editName, setEditName] = useState('');

    const handleEdit = (id) => {
        setEditId(id)
        setEdit(true);
    }
    // const handleNewFoodName = () => {
    //     editItem(editName)
    //     setEdit(false)
    // }

    const handleDelete = (id) => {
        deleteItem(id)
    }
    return (
        <div className={style.itemContainer}>
            <h1 className={style.groceryHeader}>Grocery Items:</h1>
            <ul>
            {!edit && list.map(food => (
                <div key={food.id} className={style.editList}>
                    <li className={style.listItem}>{food.name}</li>
                    <button className={style.editButton} onClick={() => handleEdit(food.id)}>Edit</button>
                    <button className={style.deleteButton} onClick={() => handleDelete(food.id)}>Delete</button>
                </div>
            ))}
            {edit && list.map(food => (
                <div key={food.id} className={style.editList}>
                    {(editId === food.id) &&
                        <>
                            <input className={style.editInput} 
                                type='text'
                                value={food.name}
                                onChange={(e) => {editItem({ ...food, name: e.target.value })}}
                            />
                            <button onClick={() => setEdit(false)}>Save</button>
                            <button className={style.deleteButton} onClick={() => handleDelete(food.id)}>Delete</button>
                        </>
                    }
                    {(editId !== food.id) &&
                    <div>
                        <ul>
                            <li className={style.listItem}>{food.name}</li>
                            <button className={style.editButton} onClick={() => handleEdit(food.id)}>Edit</button>
                            <button className={style.deleteButton} onClick={() => handleDelete(food.id)}>Delete</button>
                        </ul>
                    </div>
                    }
                </div>
            ))}
            </ul>
        </div>
    )
}
export default Items;
import style from './items.css';

function Items({ list }){
    return (
        <div className={style.itemContainer}>
            <h1 className={style.groceryHeader}>Grocery Items:</h1>
            <ul>
            {list.map(food => (
                <div key={food.id} className={style.editList}>
                    <li className={style.listItem}>{food.name}</li>
                    <button className={style.deleteButton}>Delete</button>
                </div>
            ))}
            </ul>
        </div>
    )
}
export default Items;
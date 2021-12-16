import style from './items.css';

function Items({ list }){
    return (
        <div className={style.itemContainer}>
            <h1 className={style.groceryHeader}>Grocery Items:</h1>
            <ul>
            {list.map(food => (
                <li key={food.id} className={style.listItem}>{food.name}</li>
            ))}
            </ul>
        </div>
    )
}
export default Items;
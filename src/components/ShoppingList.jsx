import style from './shoppingList.css'

function ShoppingList(){
    return (
        <section className={style.shoppingContainer}>
            <div className={style.inputField}>
                <h1 className={style.header}>Add to Your Shopping List:</h1>
                <form className={style.form}>
                    <input className={style.inputBox} type='text' placeholder='Add Item...'/>
                    <button className={style.submitButton}>Add New Item</button>
                </form>
            </div>
        </section>
    )
}
export default ShoppingList;
import './shoppingList.css';
import { useState } from 'react';

const ShoppingList = () => {
    const [text,setText] = useState('');
    const [items, setItems] = useState([]);

    const save = () => {
        console.log(text);
        
        let copy = [...items];
        copy.push(text);
        setItems(copy);
    };

    const textChange = (e) => {
        let value = e.target.value;
        setText(value);
    };

    return (
     <div className="shop-list">
        <h1>Your shopping list</h1>

        <div className="form">
            <label>Add to list:</label>
            <input onChange={textChange} type="text"></input>
            <button onClick={save} className="btn btn-sm bt-primary">
                Add
            </button>
        </div>

        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
     </div>
    );
};

export default ShoppingList;
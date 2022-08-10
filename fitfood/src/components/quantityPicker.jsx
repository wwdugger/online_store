import './quantityPicker.css';
import {useState} from 'react';

const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
        console.log('Click on react');
        let next = quantity + 1;
        setQuantity(next); 
    };

  const decrease = () => {
        let next = quantity - 1;
        if(quantity > 0) {
             setQuantity(next);
             props.onChange(next);
        }
    };
    return (
    <div className="qt-picker">
        <button className="btn btn-sm btn-info" onClick={increase}>
            +</button>
        <label>{quantity}</label>
        <button className="btn btn-sm btn-info" onClick={decrease}>
            -
        </button>
    </div>
    );
};

export default QuantityPicker;

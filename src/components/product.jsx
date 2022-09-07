import './product.css';
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react';
import StoreContext from '../store/storeContext';

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);
    const  addToCart = useContext(StoreContext).addToCart;

    const handleAddClicked = () => {
        let prodForCart = {...props.data, quantity: quantity};
        addToCart(prodForCart);
    };

    const onQuantityChange = (quantity) => {
        setQuantity(quantity);
    };
    
    const getTotal = () => {
        let total = quantity * props.data.price;
        return total.toFixed(2);
    }
    return (
        <div className="product">
          <img src={'/images/' + props.data.image} alt="Product"></img>

          <h5>{props.data.title}</h5>
          
          <div className='prices'>
             <label class='total'>Total: ${getTotal()}</label>
             <label class='price'>Price: ${props.data.price.toFixed(2)}</label>
          </div>

           <div className='controls'>
             <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
              <button onClick={handleAddClicked} className='btn btn-sm btn-success'>
                 Add
              </button>
           </div>
        </div>
    );
};

export default Product;
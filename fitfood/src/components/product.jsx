import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
    const add2Cart = () => {
        console.log(props.data.title);
    };

    const onQuantityChange = (quantity) => {
        console.log("quantity changed", quantity);
    };
    
    return (
        <div className="product">
          <img src={'/images/' + props.data.image} alt="Product"></img>

          <h5>{props.data.title}</h5>
          <div className='prices'>
             <label class='total'>Total: ${props.data.price.toFixed(2)}</label>
             <label class='price'>Price: ${props.data.price.toFixed(2)}</label>
          </div>

           <div className='controls'>
             <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
              <button onClick={add2Cart} className='btn btn-sm btn-success'>
                 Add
              </button>
           </div>
        </div>
    );
};






export default Product;
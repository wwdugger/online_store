import './product.css';
import QuantityPicker from './quantityPicker';

const Product = () => {
    return (
        <div className="product">
            <img src="https://picsum.photos/200/300/?blur" alt="Product"></img>

            <h5>Products</h5>

            <QuantityPicker></QuantityPicker>
        </div>
    );
};






export default Product;
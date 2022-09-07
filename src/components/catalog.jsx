import './catalog.css';
import Product from "./product";
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

const Catalog = () => {
 const [products, setProducts] = useState([]);
 const [categories, setCategories] = useState([]);

 const loadData = async () => {
    let service = new DataService();
    let prods = await service.getCatalog();
    setProducts(prods);

    let uniques = [];
    for (let i = 0; i < prods.length; i++) {
        let prod = prods[i];
        if (!uniques.includes(prod.category)) {
            uniques.push(prod.category);
        }
    }
    setCategories(uniques);
};

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="catalog">
            <h1>Check out our amazing catalog</h1>

            <div className="product-list">
                {products.map((p) => ( 
                <Product key={p._id} data={p}></Product>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [showProdSuccess, setShowProdSuccess] = useState(false);

  const saveProduct = async () => {
    console.log("Saving Product");
    console.log(product);

    let fixProd = {...product};
    fixProd.price = +fixProd.price;

    let service = new DataService();
    let savedProd = await service.saveProduct(fixProd);
    console.log(savedProd);

    if(savedProd && savedProd._id) {
      setShowProdSuccess(true);

      setTimeout(() => { 
        setShowProdSuccess(false)
      }, 2000); //in MILLISECONDS
    }
  };

  const textChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const saveCoupon = () => {
    console.log(coupon);
  };

  const couponChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  return (
    <div className="admin">
      <h1>Store Administration</h1>

      {showProdSuccess ? <div className="alert alert-success">Product Saved</div> : null }

      <div className="parent">
        <section className="products">
          <h3>Register Products</h3>

          <div className="my-form">
            <label>Title:</label>
            <input name="title" onChange={textChange} type="text"></input>
          </div>

          <div className="my-form">
            <label>Price:</label>
            <input name="price" type="text"></input>
          </div>

          <div className="my-form">
            <label>Image</label>
            <input name="image" type="text"></input>
          </div>

          <div className="my-form">
            <label>Category</label>
            <input name="category" type="text"></input>
          </div>

          <div className="my-form">
            <button onClick={saveProduct} className="btn btn-sm btn-primary">
              Save Product
            </button>
          </div>
        </section>

        <div className="my-form">
          <label>Code</label>
          <input name="discount" onChange={couponChange} type="number"></input>
        </div>

        <div className="my-form">
          <label>Save Coupon</label>
          <button onclick={saveCoupon} className="btn btn-sm btn-dark">
            Save Coupon
          </button>
        </div>

        <section className="list">
          <h3>Discount Codes</h3>
        </section>
      </div>
    </div>
  );
};

export default Admin;

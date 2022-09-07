import axios from 'axios';

const catalog = [
    {
       _id:"1",
       title:"Cookie",
        price: 10.00,
        category: "Protein Cookies",
        image: "https://yesofcorsa.com/wp-content/uploads/2017/07/Chocolate-Chip-Cookie-Photo-Free.jpg",
   },
   {
        _id:"2",
       title:"Cookie",
       price: 10.00,
       category: "Protein Snacks",
       image: "cookie2.jpg",
   },
   {
       _id:"3",
       title:"Cookie",
       price: 10.00,
       category: "Protein Snacks",
       image: "cookie1.jpg",
   },
   {
       _id:"4",
        title:"Cookie",
        price: 10.00,
       category: "Protein Snacks",
       image: "cookie2.jpg",
   },
   {
       _id:"5",
        title:"Cookie",
        price: 10.00,
        category: "Protein Snacks",
        image: "cookie1.jpg",
  },
];

class DataService{
    async getCatalog(){
       // let res = await axios.get("http://127.0.0.1:5000/api/catalog");
      //   return res.data;
        return catalog;
    }

    async saveProduct(prod) {
        let res = await axios.post("http://127.0.0.1:5000/api/catalog, prod");
        return res.data;
    }
}

export default DataService;
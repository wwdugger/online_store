var catalog = [
    {
        _id:"1",
        title:"Cookie",
        price: 10.00,
        category: "Protein Cookies",
        image: "cookie1.jpg",
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
        image: "cookie3.jpg",
    },
    {
        _id:"4",
        title:"Cookie",
        price: 10.00,
        category: "Protein Snacks",
        image: "cookie4.jpg",
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

    getCatalog(){
       // call the server
       //get the list of products and return it
       
       return catalog;
    }
}

export default DataService;
import './home.css';
import {Link} from 'react-router-dom';
const Home = () => {

    return (
        <div className="home">
           <div className="banner-1">
            <div className="banner-text">
            <h1>FitFood</h1>
            <h4>Welcome to FitFood, where you can find amazing cookies packed with protein and health benefits without all the sugar and preservatives!</h4>
           </div>

            <Link className="btn btn-lg btn-dark" to="/catalog">
                Browse our catalog!
            </Link>
            <img src="https://leafly-public.s3-us-west-2.amazonaws.com/products/photos/VwiYJVlRRqQ8dVQ2IGoT_IMG_0227.JPG" alt="banner" />
           </div>
        </div>
    );
};


export default Home;
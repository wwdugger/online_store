import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Catalog></Catalog>

      <AboutMe></AboutMe>

      <Footer></Footer>
    </div>
  );
}
//read about react hooks HW useState, useEffect, useContext
export default App;

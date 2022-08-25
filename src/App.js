import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="grid-container">
      <div className="item1"><Header/></div>
      <div className="item3"><Home></Home></div>
      <div className="item5"><Footer></Footer></div>
    </div>
  );
}

export default App;

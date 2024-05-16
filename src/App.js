import "./App.css";
import HomePage from "./components/home";
import NavBar from "./components/nav";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar />
      </div>
      <HomePage />
    </div>
  );
}

export default App;

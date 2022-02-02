import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="Archana" />
      <div className="container">
        <TextForm />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Accordion from "./Components/Accordion";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="Archana" />
      <div className="container">
        <TextForm />
      </div>
      <div className="container">
        <Accordion />
      </div>
      {/* <div className="mt-2"></div> */}
    </div>
  );
}

export default App;

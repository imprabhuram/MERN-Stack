import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Component from "./component/Component";
import Component2 from "./component/Component2";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Component />
      <Component2 />
    </div>
  );
}

export default App;

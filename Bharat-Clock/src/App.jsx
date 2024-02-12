import Clock from "./components/Clock";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid text-bg-dark text-center pt-5 vh-100 position-relative">
      <h1>Bharat Clock</h1>
      <Clock />
    </div>
  );
}

export default App;

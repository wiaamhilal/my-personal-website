import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import UnderBuild from "./component/UnderBuild";
import Email from "./component/Email";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
            </>
          }
        />
        <Route
          path="/build"
          element={
            <>
              <Header /> <UnderBuild />
            </>
          }
        />
        <Route
          path="/email"
          element={
            <>
              <Header /> <Email />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

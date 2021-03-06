import React from  "react";
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Calendar from "./Calendar";
import Footer from "./Footer";
import Selector from "./Selector";

const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;

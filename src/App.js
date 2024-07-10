import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export deflault function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
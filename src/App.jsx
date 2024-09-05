
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies"
import Residencies from "./components/Residencies/Residencies"
import "./App.css"
import Contacts from "./components/Contacts/Contacts";
import Information from "./components/Information/Information";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return(
  <div className="App">
      <div>
        <div className="white-gradient" />
          <Header/>
          <Hero/>
      </div>
        <Companies/>
        <Residencies/>
        <Information/>
        <Contacts/>
        <GetStarted/>
        <Footer/>
  </div>
  );
}

export default App;

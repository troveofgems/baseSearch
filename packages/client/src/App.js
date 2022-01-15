import {useRef} from "react";
import Landing from "./components/layout/Landing/Landing";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import FooterA from "./components/Footer/Footer_A";
import FooterB from "./components/Footer/Footer_B";
import Listings from "./components/Listings/Listings";

import './App.css';
import './Mobile.css'
function App() {
  let myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div className="App">
      <Landing executeScroll={executeScroll} />
      <About />
      <Listings scrollToRef={myRef}/>
      <Reviews />
      <footer className={"footer"}>
        <FooterA />
        <FooterB />
      </footer>
    </div>
  );
}

export default App;

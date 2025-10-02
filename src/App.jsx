import "./App.css";
import "./Fonts/anurati-webfont/style.css";
import "./Fonts/quick-webfont/stylesheet.css";
import BgVideo from "./Components/BgVideo";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useState } from "react";
import About from "./Components/About";

function App() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("home");

  return (
    <>
      <BgVideo></BgVideo>

      <Navbar
        active={active}
        setActive={setActive}
        setToggle={setToggle}
      ></Navbar>

      <main>
        {toggle === "home" && <Hero></Hero>}
        {toggle === "projects" && <p>Projects</p>}
        {toggle === "skills" && <p>Skills</p>}
        {toggle === "about" && <p>About</p>}
        {toggle === "contact" && <About></About>}
      </main>
    </>
  );
}

export default App;

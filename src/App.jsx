import "./App.css";
import "./animations.css";
import "./Fonts/anurati-webfont/style.css";
import "./Fonts/quick-webfont/stylesheet.css";
import BgVideo from "./Components/BgVideo";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import { useState } from "react";

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
        {toggle === "about" && <About></About>}
        {toggle === "contact" && <p>Contat</p>}
      </main>
    </>
  );
}

export default App;

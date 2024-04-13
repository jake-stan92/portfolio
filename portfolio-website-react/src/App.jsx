import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ProjectContainer from "./Components/ProjectContainer";

function App() {
  const images = [
    "https://via.placeholder.com/800x400/ff5733/fff",
    "https://via.placeholder.com/800x400/33ff57/fff",
    "https://via.placeholder.com/800x400/5733ff/fff",
  ];
  return (
    <>
      <Header />
      <Nav />
      <About />
      <ProjectContainer images={images} />
    </>
  );
}

export default App;

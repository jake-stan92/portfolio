import "./App.css";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ProjectContainer from "./Components/ProjectContainer";
import Footer from "./Components/Footer";
import BackToTopButton from "./Components/BackToTopButton";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <ProjectContainer />
      <ContactForm />
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;

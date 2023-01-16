import './styles.css';
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
        <main className="bg-image">
            <div className="w-[90%] m-auto max-w-[1111px] relative">
                <Header />
                <Intro />
                <About />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </main>
  );
}

export default App;
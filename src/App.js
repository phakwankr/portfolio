import './styles.css';
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Port from "./components/Port";

function App() {
  return (
        <main className="bg-image">
            <div className="w-[90%] m-auto max-w-[1111px] relative">
                <Header />
                <Introduction />
                <About />
                <Port />
                <Contact />
                <Footer />
            </div>
        </main>
  );
}

export default App;
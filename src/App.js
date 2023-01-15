import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './styles.css';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <main className="bg-image">
            <div className="w-[90%] m-auto max-w-[1111px] relative">
                <Navbar />
                <Route path='/' exact component={Intro} />
                <Route path='/about' component={About} />
                <Work />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
                <Footer />
            </div>
        </main>
    </Router>
  );
}

export default App;
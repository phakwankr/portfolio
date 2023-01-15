import Header from "./components/Header";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <main className=" min-h-screen bg-neutral overflow-x-hidden ">
      <div className=" w-[90%] m-auto max-w-[1111px] relative  ">
        <Header />
        <Intro />
        <Work />
        <About />
        <Portfolio />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}

export default App;

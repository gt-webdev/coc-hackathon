import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
// import FAQs from "./components/FAQs";
import Bottom from "./components/Bottom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Sponsors/>
      <Tracks />
      <Schedule />
      {/* <FAQs /> */}
      <Bottom />
    </div>
  );
};

export default App;

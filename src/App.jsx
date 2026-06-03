import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RaceInfo from "./components/RaceInfo";
import Timeline from "./components/Timeline";
import JuniorWarrior from "./components/JuniorWarrior";
import Registration from "./components/Registration";
import AboutUs from "./components/AboutUs";
import Terms from "./components/Terms";
import RacePack from "./components/RacePack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <RaceInfo />
      <Timeline />
      <RacePack />
      <JuniorWarrior />
      <Registration />
      <AboutUs />
      <Terms />
      <Footer />
    </div>
  );
}

export default App;
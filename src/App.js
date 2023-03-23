import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import Features from "./components/Features";
import Services from "./components/Services";
import Logo from "./components/Logo";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="relative">
      <Logo></Logo>
      <Hero></Hero>
      <FeaturedIn></FeaturedIn>
      <Features></Features>
      <Services></Services>
      <Stats></Stats>
    </div>
  );
}

export default App;

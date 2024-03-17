import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import SectionTitle from "./components/SectionTitle/SectionTitle";

function App() {
  return (
    <div className="lg:max-w-[1320px] lg:mx-auto mx-5">
      <Header></Header>
      <Hero></Hero>
      <SectionTitle></SectionTitle>
      <Main></Main>
    </div>
  );
}

export default App;

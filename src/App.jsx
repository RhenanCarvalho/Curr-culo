import Header from "./components/Header";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import AdditionalInfo from "./components/AdditionalInfo";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Resume />
      <Experience />
      <Education />
      <Skills />
      <AdditionalInfo />
    </div>
  );
};

export default App;
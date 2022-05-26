import PersonalInfo from "./Components/PersonalInfo";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import "./Styles/app.css";


function App() {
  return (
    <div className="app">

    <Header />
    <div className="main">
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
    </div>
  );
}

export default App;

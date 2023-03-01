import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header"
import HeroVideo from "./components/HeroVideo/HeroVideo"
import HeroContent from './components/HeroContent/HeroContent';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <HeroContent />
    </div>
  );
}

export default App;
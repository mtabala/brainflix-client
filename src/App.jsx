import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header"
import HeroVideo from "./components/HeroVideo/HeroVideo"
import HeroContent from './components/HeroContent/HeroContent';
import CommentForm from './components/CommentForm/CommentForm';
import Videos from './assets/Data/videos.json';

console.log (Videos);

function App() {
  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <HeroContent />
      <CommentForm />
    </div>
  );
}

export default App;
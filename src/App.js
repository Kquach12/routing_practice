import Home from './Components/Home';
import WordOrNum from './Components/WordOrNum';
import ColorBox from './Components/ColorBox';
import './App.css';
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <WordOrNum path="/:id"/>
        <ColorBox path="/:id/:fontColor/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;

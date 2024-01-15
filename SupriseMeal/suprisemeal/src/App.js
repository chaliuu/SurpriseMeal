import logo from './logo.svg';
import './App.css';
import ReactWheel from './ReactWheel';
import WheelComponent from "./ReactWheel";
import SpinningLogo from "./SpinningLogo";
/*

function App() {
    /** 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
    return <ReactWheel/>;
}

export default App;
*/


export default function App() {
    const segments = [
        "Better luck ",
        "10% off",
        "5% off",
        "Better luck ",
        "20% off",
        "15% off"
    ];
    const segColors = [
        "black",
        "#60BA97",
        "black",
        "#60BA97",
        "black",
        "#60BA97"
    ];
    const onFinished = (winner) => {
        console.log(winner);
    };
    return (
        <div className="App">
            <h1>SurpriseMeal</h1>
            
            <img src = "./logo.png"/>
            <h2> Spin the wheel and win exiting offers</h2>
        </div>
    );
}
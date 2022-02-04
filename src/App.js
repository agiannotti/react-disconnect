import "./App.css";
import NetworkerDetector from "./hooks/NetworkerDetector";

function App(onstart, onload) {
  const isDisconnected = NetworkerDetector();
  return (
    <div className="App">
      {isDisconnected && (
        <div className="internet-error">
          <p>Internet Connection Lost</p>
        </div>
      )}
    </div>
  );
}

export default App;

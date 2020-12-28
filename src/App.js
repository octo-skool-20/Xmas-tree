import './App.css';
import Card from './card/Card.js'

function App() {
    function Panel() {
        return (
        <div id="panel">
            <p> Veuillez élargir la fenêtre ou passer en orientation paysage </p>
        </div>
        )
    }

  return (

      <div className="App">
          <header className="App-header">

          </header>
          <Card/>
      </div>

  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  const [ state, toggleState ] = React.useState(false);

  return (
    <main className={state ? "on" : "off"}>
      <section>
        <div className="dot"></div>
        <button type="button" onClick={() => {
          toggleState(!state);
          console.log(state);
        }}>{state ? "Turn off" : "Turn on"}</button>
      </section>
    </main>
  );
}

export default App;

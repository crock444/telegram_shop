import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp


function App() {

    useEffect(() => {
        tg.ready();
    }, []);



  return (
    <div className="App">
      work
        <button onClick={ocClose}>Закрыть</button>
    </div>
  );
}

export default App;

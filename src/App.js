import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp


function App() {

    useEffect(() => {
        tg.ready();
    }, []);

    const ocClose =() =>{
        tg.close()
    }

  return (
    <div className="App">
      work
        <button onClick={ocClose}>Закрыть</button>
    </div>
  );
}

export default App;

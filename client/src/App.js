import './App.css';
import Header from  './components/Header'
import Renting from './components/Renting'
import SwipeButtons from './components/SwipeButtons'

function App() {
  return (
     <div className="app">
  
      {/* <h1>Bike Renting App</h1> */}
        <Header/>
        <Renting/>
        <SwipeButtons/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './component/Navbar.js';
import BasicExample from './component/form';
import './index';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <BasicExample/>
      </div>
        </div>
  );
}

export default App;

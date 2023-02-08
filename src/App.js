import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { Comics } from "./Component/Comics";
import { Characters } from "./Component/Characters";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/Characters" className='marvel'>
          <span>Marvel</span> information portal
        </Link>
<div>
        <Link to="/Characters" className='characters'>
          Characters
        </Link>
        /
        <Link to="/Comics" className='comics'>
          Comics
        </Link>
        </div>
      </div>
      <Routes>
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Comics" element={<Comics />} />
      </Routes>
    </div>
  );
}

export default App;

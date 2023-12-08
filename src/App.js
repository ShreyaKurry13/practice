import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';


function App() {
  return (
    <>
      <Navbar title="Textme" about="About us"/>
      <div className="container my-4 ">
      <TextForm heading="Enter your text"/>
      </div>
      
    </>
  );
}

export default App;

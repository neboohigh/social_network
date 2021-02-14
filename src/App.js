import './App.css';
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import HeaderContainer from "./Header/HeaderContainer";


function App(props) {
  return (
      <div className="App">
        <HeaderContainer/>
        <Navbar/>
        <Content/>
      </div>

  );
}

export default App;


        
        
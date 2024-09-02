import logo from './logo.svg';
import './App.css';
import User from './component/user';
import Cards from './component/Card';
import Page from './component/Page';


function App() {
  return (
    <div className="App">
    {/* <Cards/> */}
    <Page itemsPerPage={6}/>

    </div>
  );
}

export default App;

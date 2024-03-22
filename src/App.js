import logo from './logo.svg';
import './App.css';

function App() {
  function changeFirstnameHandler(event)
  {
    
console.log("Printing first name"); console.log(event.target.value);

  }
  function changelastnameHandler(event)
  {

console.log("Printing last name");   console.log(event.target.value);

  }
  return (
    <div className = "App">
      <form>
        <input onChange = {changeFirstnameHandler} type= "text" placeholder= "first name"></input>
        <input type = "text" placeholder = "last name" onChange = {changelastnameHandler}></input>
      </form>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {


//   const[firstName,setFirstname] = useState("");
//   const[lastName,setlastname] = useState("");
//   console.log(firstName);
//   console.log(lastName);
//   function changeFirstnameHandler(event)
//   {
    
//     // console.log("Printing first name"); 
//       //  console.log(event.target.value);
//       setFirstname(event.target.value);

//   }
//   function changelastnameHandler(event)
//   {

// // console.log("Printing last name");   console.log(event.target.value);
// setlastname(event.target.value);

//   }
//controlled components


const[formData,setFormData] = useState({firstName: "",lastName:"",email:"",Comments:"",isVisible:true});
console.log(formData);
function changeHandler(event){
  const {name,value,checked,type}  = event.target;
  setFormData(prevFormData=>{
    return{
      ...prevFormData,
      [name] : type ==="checkbox"?checked:value 
      // [event.target.name] : event.target.value
    }
  });

}
  return (
    <div className = "App">
      <form>
        <input onChange = {changeHandler} type= "text" placeholder= "first name" name = "firstname" value = {formData.firstName}></input>
        <br></br>
        <input type = "text" placeholder = "last name" onChange = {changeHandler} value = {formData.lastName}
        name = "lastname"></input>
        <br></br>
        <input type = "email" placeholder = "Enter your email here" onChange={changeHandler} name = "email" value = {formData.email}></input>
        <br>
        </br>
        <textarea placeholder='Enter your comments here!!' onChange = {changeHandler} name = "Comments" value = {formData.Comments}/><br></br>

        <input type = "checkbox" onChange = {changeHandler} name = "isVisible" id = "isVisible" checked = {formData.isVisible} />
        <label htmlFor='isVisible'>Am I Visible</label>
      </form>
    </div>
  );
}

export default App;

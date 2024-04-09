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
//controlled components-maintain state inside component
//ek bar radio button vala try karna haii


const[formData,setFormData] = useState({firstName: "",lastName:"",email:"",Comments:"",isVisible:true,mode:"",favCar:""});
console.log(formData);
function submitHandler(event)
{
    event.preventDefault();
    console.log("Finally printing....");
    console.log(formData);

}

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
      <form onSubmit={submitHandler}>
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
        <br></br>
        <input type = "radio"  onChange={changeHandler}  name = "mode" value = "Online-Mode" id= "Online-Mode" checked = {formData.mode === 'Online-Mode'}
        
        />
        <label htmlFor='Online-Mode'>Online Mode</label>
        <input type = "radio"  onChange={changeHandler}  name = "mode" value = "OFFline-Mode" id= "OFFline-Mode"
        checked = {formData.mode === "OFFline-Mode"}
        
        />
        
        <label htmlFor='OFFline-Mode'>OFFline Mode</label>
        {/* jab bhoot sare radio buttons lgane hotee hai tw  hum unko fieldset me group karke rhkte hai or usme caption legend se lgate hai */}
        <label htmlFor='favCar'>Tell me your Favourite Car?</label>
        <select
          onChange={changeHandler}
          name = "favCar"
          id="favCar"
          value={formData.favCar}
         >

          <option value = "scorpio" >Scorpio</option>
          <option value = "fortuner" >Fortuner</option>
          <option value = "Thar" >Thar</option>
          <option value = "Legender" >Legender</option>
          <option value = "Defender" >Defender</option>
          


        </select>
        <br>
        </br>
        {/* <input type = "submit" value= "submit"/> */}
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;

import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
import React, {useState} from "react";


function App() {
  // console.log(usernameChangeHandler)
  // let inputUserName = 'test-username';
  // function setInputUserName(value) {
  //   inputUserName = value;
  // }
  // setInputUserName('test')
  // console.log(inputUserName)


  const [inputUserName, setInputUserName] = useState('test-username'); // daca vreau sa accesez valoarea stateul, fac setuser
  const [inputEmail, setInputEmail] = useState(''); // daca vreau sa accesez valoarea stateul, fac setuser


  const usernameChangeHandler = (event) => {
    // console.log(event.target.value)
    // inputUserName = event.target.value;
    setInputUserName(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  }

  return (
    <>
      Input Username: {inputUserName} <br />
      Input Mail: {inputEmail} <br />
      
      <UserInput 
        changed={usernameChangeHandler}
        changedEmail={emailChangeHandler} 
        userName={inputUserName}
        userEmail={inputEmail} 
      />

      <UserOutput
        userName={inputUserName}
        userEmail={inputEmail}/>
      
      <UserOutput
        userName={inputUserName}
        userEmail={inputEmail}/>
      
      <UserOutput
        userName="Gheorghe"
        userEmail="gheorghe@gmail.com"/>
    </>
  );
}

export default App;

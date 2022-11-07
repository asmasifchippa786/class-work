import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Signup() {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [rePassword , setRePassword] = useState('')

  const signupHandler =(e) => {
    e.preventDefult();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        // ..
      });

  }



  

  return (
    <>
      <div>this is Signup page</div>

      <form onSubmit={signupHandler}>
          Name : <input type="text" placeholder="Enter The Name" onChange={(e) => {setName(e.target.value)}}/>
          <br />
          Email : <input type="email" placeholder="Enter The Email" onChange={(e) => {setEmail(e.target.value)}}/>
          <br />
          Password : <input type="password" placeholder="Enter The Password" onChange={(e) => {setPassword(e.target.value)}}/>
          <br />
          Re-Password : <input type="password" placeholder="Enter The Re-Password" onChange={(e) => {setRePassword(e.target.value)}}/>
          <br />
          <button type="submit">SignUp</button>
      </form>
    </>
  );
}

export default Signup;

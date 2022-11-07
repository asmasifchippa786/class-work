import React, { useState } from "react";

function Signup() {

  const [email , setEmail] = useState()

  function signupHandler(){

  }


  return (
    <>
      <div>this is Signup page</div>



      <form onSubmit={signupHandler}>
        <input type="email" placeholder="Email" onChange={(e)=> {setEmail(e.target.value)}}/>
        <br />
        <input type="password"  placeholder="Password" onChange={(e)=> {setEmail(e.target.value)}}/>
        <br />
        <input type="password"  placeholder="confrim Password" onChange={(e)=> {setEmail(e.target.value)}}/>
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Signup;

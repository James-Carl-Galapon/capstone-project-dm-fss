import React, { useState } from "react";
import { useEffect } from "react";

function Home({userInstance}) {
  let [email, setEmail] = useState('');
  useEffect(()=>{
    userInstance.get('userProfile').on((data)=>setEmail(data.emailProp));
  }, []);
  return (
    <div>
      <h1>Home:</h1>
      <br></br>
      <h2>Your Email: {email}</h2>
    </div>
  );
}

export default Home;



import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const HomePage =({changeUser})=>{

const [userLogin,setUserLogin] = useState("")

const handleSubmit = (e) =>{ 

    e.preventDefault()
    findCurrentUser(userLogin)
   
}

const handleChange= e => {
    setUserLogin(e.target.value)
}

const history = useHistory();

async function findCurrentUser(username){
    const response = await fetch(`http://localhost:9292/logins/${username}`)
  
if (response.status === 401 ) {
    return  alert("Username does not exist")
}
    else {
    const user = await response.json()
    changeUser(user)
    
    history.push('/books')
    }
    

}


return (

     <div>
     <form onSubmit={handleSubmit}>
     <label htmlFor="login" value="Username"> Username:  </label><br/>
     <input type="text" name="login" value={userLogin} onChange={handleChange} autoFocus={true}/>
     <input type="submit" value="Login"/>
     </form>
     </div>
)


}

export default HomePage
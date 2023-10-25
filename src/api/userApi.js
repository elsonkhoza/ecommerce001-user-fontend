import axios from "axios"

const url="http://localhost:8080"

export const loginUser= async (loginRequest)=>{

  const response= await  axios.post(`${url}/login`,loginRequest)
    .catch((e)=>{
       console.log("User Login request ")
    })

}
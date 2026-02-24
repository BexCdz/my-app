import React from "react"
import axios from "axios";

export default function Weather(props){
  function handleResponse (response){
    alert(`The weather is ${response.data.city} is ${response.data.temperature.current
}C `)

  }
  let apiKey = "6eo2f8064f04d58b91065a4e4bb3c0t3"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`
 
  
  axios.get(apiUrl).then(handleResponse);
  return <h1>Hello from weather </h1>


}
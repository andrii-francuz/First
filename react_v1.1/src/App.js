import React from "react"
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY ="f5a556e1c32555a25bcd144fbd626f07";

class App extends React.Component{

  getweather = async (e) => {
    e.preventDefault(); //event.preventDefault
    const city = e.target.elements.city.value;
    const n_const = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await n_const.json();
    console.log(data);
  }

  render(){
    return(
      <div>
        <Info/>
        <Form getMethod = {this.getweather}/>
        <Weather/>
      </div>
    );
  }

}
export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
   // const [data, setData] = useState({});
 
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&')
        .then(response => response.json())
        .then(item => console.log(item));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  // console.log("Akhil", data)
 
  return (
    <div>
    <p>Akhil</p>
    </div>
  );
}
 
export default App;